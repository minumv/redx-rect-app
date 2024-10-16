import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;

    if (!token) return next(errorHandler(401, 'You are not authenticated!'));

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return next(errorHandler(403, 'Token is not valid!'));

        req.user = user;
        console.log('Admin token');
        next();
    });


}
export const verifyAdmin = async (req, res, next) => {
    try {
        
        const userId = req.user._id; 
       
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found.' });
        }
        if (user.role !== 'admin') {
            return res.status(403).json({ success: false, message: 'Access denied. Admins only.' });
        }
        console.log('Admin verified');
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || 'An error occurred while verifying admin access.',
        });
    }
};


export const updateUser = async (req, res, next) => {    
    try {
     
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            username: req.body.username,
            email: req.body.email,
            profilepic: req.body.profilepic,
          },
        },
        { new: true }
      );
      const { password, ...rest } = updatedUser._doc;
      res.status(200).json(rest);
    } catch (error) {
      next(error);
    }
  };
 
  export const deleteUser = async (req, res, next) => {
    
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json('User has been deleted...');
    } catch (error) {
      next(error);
    }
  
  }

  export const getUsers = async (req, res, next) => {
    try {
        
        const users = await User.find({ role:'user'}); 
        res.json(users);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || 'An error occurred while fetching users.',
        });
    }
};
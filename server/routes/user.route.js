import express from 'express'
import {test,updateUser} from '../controller/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router()

//userside routes
router.get('/', test )
router.post('/update/:id', verifyToken, updateUser);


export default router;
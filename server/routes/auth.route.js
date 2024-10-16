import express from 'express'
import { admin, google, signin, signout, signup } from '../controller/auth.controller.js'

const router = express.Router()

router.post('/signup',signup)
router.post('/signin',signin);
router.post('/google',google);
router.post('/admin',admin);
router.get('/signout',signout);

export default router;
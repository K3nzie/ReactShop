import express from 'express';
import { authUser, getUserProfile, registerUser } from '../controllers/userController.js';
//import Product from '../models/productModel.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();


router.post('/login', authUser);
// With the middleware created now I can simply protect any routes adding the protect
router.route('/profile').get(protect, getUserProfile);
router.route('/').post(registerUser);

export default router;

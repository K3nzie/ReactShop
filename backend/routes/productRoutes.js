import express from 'express';
import { getProducts, getProductBySlug } from '../controllers/productController.js';
//import Product from '../models/productModel.js';


const router = express.Router();


router.route('/').get(getProducts);
router.route('/:slug').get(getProductBySlug);

export default router;

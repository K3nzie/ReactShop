import express from 'express';
import Product from '../models/productModel.js';

// Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers.
import asyncHandler from 'express-async-handler';

const router = express.Router();

// @desc  Fetch all products
// @router  GET /api/products
// @access  Public


router.get('/', asyncHandler(async (req, res) => {

  // reminder that mongoose functions reuturn promises
  // but instead of using the .then() syntax I'm opting
  // for await

  const products = await Product.find({});
  res.json(products);
}));


// @desc  Fetch a single product by the slug
// @router  GET /api/products/:slug
// @access  Public

router.get('/:slug', asyncHandler(async (req, res) => {
  const product = await Product.findOne({
    'slug': req.params.slug
  })
  if(product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
}));

export default router;

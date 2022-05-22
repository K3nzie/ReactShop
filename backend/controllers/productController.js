import Product from '../models/productModel.js';
// Simple middleware for handling exceptions inside of async express routes
// and passing them to your express error handlers.
import asyncHandler from 'express-async-handler';

// @desc  Fetch all products
// @router  GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {

  // reminder that mongoose functions reuturn promises
  // but instead of using the .then() syntax I'm opting
  // for await

  const products = await Product.find({});

  res.json(products);

});

// @desc  Fetch a single product by the slug
// @router  GET /api/products/:slug
// @access  Public
const getProductBySlug = asyncHandler(async (req, res) => {

  const product = await Product.findOne({
    'slug': req.params.slug
  })
  if(product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }

});

export { getProducts, getProductBySlug }

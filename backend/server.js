import express from 'express';
import dotenv from 'dotenv';
import products from './data/products.js';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// Separated routes in a different file
import productRoutes from './routes/productRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running..');
});

// For every route that goes through express following the api/products URI, redirect to separate routes file
app.use('/api/products', productRoutes);
app.use('/cart/api/products', productRoutes);

// Middleware to handle errors

// 404
app.use(notFound);

// 500
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('Server running in ' + process.env.NODE_ENV + ' on port ' + PORT));

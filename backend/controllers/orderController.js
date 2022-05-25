import Order from '../models/orderModel.js';
// Simple middleware for handling exceptions inside of async express routes
// and passing them to your express error handlers.
import asyncHandler from 'express-async-handler';

// @desc  Create new order
// @router  POST /api/orders
// @access  Private
const addOrderItems = asyncHandler(async (req, res) => {
  const { orderItems, shippingAddress, paymentMethod, itemsPrice,
        taxPrice, shippingPrice, totalPrice } = req.body;

  if(orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
    return
  } else {
      const order = new Order({
        orderItems,
        user: req.user._id,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice
      });

      const createdOrder = await order.save();
      res.status(201).json(createdOrder);
  }

});

// @desc  Get an order by ID
// @router  GET /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async (req, res) => {
  // To this query atatach the user to the order
  const order = await Order.findById(req.params.id).populate('user', 'name email');

  if(order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }

});

export { addOrderItems, getOrderById };

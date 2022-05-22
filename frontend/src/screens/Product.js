import React, { useState, useEffect } from 'react';
//import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap';
import Rating from '../components/Rating';
import Message from '../components/Message';
import Loader from '../components/Loader';
//import axios from 'axios';
import { listProductDetails } from '../actions/productActions.js';

const Product = () => {
  const { slug } = useParams();

  const [qty, setQty] = useState(0);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const productDetails = useSelector(state => state.productDetails);
  const { loading, error, product } = productDetails;
  console.log(loading);

  useEffect(() => {
    dispatch(listProductDetails(slug))
  }, [dispatch]);

  const addToCartHandler = () => {
      navigate(`/cart/${slug}?qty=${qty}`);
  }

  return (
    <div>
      <Link className="btn btn-dark my-5" to="/">Go back</Link>
      { loading
        ?
        <Loader />
        : error
        ?
        <Message variant="danger">{error}</Message>
        :
        <Row>
          <Col md={3} className="text-center">
            <Image className="shadow" src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={6}>
            <ListGroup className="text-center shadow" variant="flush">
              <ListGroup.Item className="pb-3">
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item className="py-4 fs-5">
                <Rating value={product.rating} text={`${product.numReviews} reviews`} />
              </ListGroup.Item>
              <ListGroup.Item className="py-4 fs-4">
                Price: ${product.price}
              </ListGroup.Item>
              <ListGroup.Item className="p-5 lh-5 fs-5 fw-light" style={{ }}>
                {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush" className="shadow">

                <ListGroup.Item>
                  <Row>
                    <Col>
                      Price:
                    </Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>
                      Status:
                    </Col>
                    <Col>
                      {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 && (

                  <ListGroup.Item>
                    <Row>
                      <Col>
                        Qty
                      </Col>
                      <Col>
                        <Form.Control as='select' value={qty} onChange={(e) => setQty(e.target.value)}>

                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x+1} value={x+1}>{x+1}</option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                )}

                <ListGroup.Item>
                  <Button
                  onClick={addToCartHandler}
                  className="w-100" type="button" disabled={product.countInStock === 0}
                  title={product.countInStock === 0 ? 'Game is out of stock' : 'Add to your cart'}>
                  Add to Cart
                  </Button>
                </ListGroup.Item>

              </ListGroup>
            </Card>
          </Col>
        </Row>
      }
    </div>
  );
};

export default Product;

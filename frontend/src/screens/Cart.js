import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import { addToCart, removeFromCart } from '../actions/cartActions.js';


const Cart = () => {
  const { slug } = useParams();
  //console.log(slug);
  const navigate = useNavigate();

  const location = useLocation();
  // Get the parameter in the quantity query from the URL
  const qty = location.search ? Number(new URLSearchParams(location.search).get('qty')) : 1;

  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;


  useEffect(() => {
    if(slug) {
      dispatch(addToCart(slug, qty))
    } else {

    }

  }, [dispatch, slug, qty]);

  const removeFromCartHandler = (slug) => {
    dispatch(removeFromCart(slug));
  }

  const checkoutHandler = () => {
    navigate('/login?redirect=shipping')
  }

  return <Row>
    <Col md={8}>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? <Message>Your cart is empty. <Link to='/'>Go back</Link></Message> : (
        <ListGroup variant="flush">
          {cartItems.map(item => (
            <ListGroup.Item key={item.product} style={{ height: "180px" }}>
              <Row className="align-items-center text-center">
                <Col md={2}>
                  <Image style={{ width: "100%", "max-height": "160px" }} src={item.image} alt={item.name} fluid rounded />
                </Col>
                <Col md={3}>
                  <Link to={`product/${item.product}`}>{item.name}</Link>
                </Col>
                <Col md={2}>
                  <div>
                    ${item.price}
                  </div>
                </Col>
                <Col md={2}>
                  <Form.Control as='select' value={item.qty} onChange={(e) => dispatch(
                    addToCart(item.slug, Number(e.target.value))
                  )}>


                    {[...Array(item.countInStock).keys()].map((x) => (
                      <option className="text-center w-auto" key={x+1} value={x+1}>{x+1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button type="button" onClick={() => removeFromCartHandler(item.product)}>
                    <i className="fas fa-trash"></i>
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Col>
    <Col md={4}>
      <Card>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h2>Subtotal ({ cartItems.reduce((acc, item) => acc + item.qty, 0 )}) Items</h2>
            ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
          </ListGroup.Item>
          <ListGroup.Item>
            <Button type="button" className="btn-block w-100" disabled={cartItems.length === 0}
             onClick={checkoutHandler
             }>
              Proceed to Checkout
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Col>

  </Row>
};

export default Cart;

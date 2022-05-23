import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getUserDetails } from '../actions/userActions.js';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const userDetails = useSelector(state => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if(!userInfo) {
      navigate('/login');
    } else {
      if(!user.name) {
        dispatch(getUserDetails('profile'));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, navigate, userInfo, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    // Dispatch Register
    if(password !== confirmPassword) {
      setMessage('Passwords do not match, please retry');
    } else {
      // Dispatch update user profile
    }

  } // submitHandler


  return (
      <Row>
        <Col md={3}>
        <h2>User Profile</h2>
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler} className="my-3">
        <Form.Group controlId='name' className="py-md-2">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter name" value={name}
          onChange={(e) => setName(e.target.value)}>
          </Form.Control>
        </Form.Group>
          <Form.Group controlId='email' className="py-md-2">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email}
            onChange={(e) => setEmail(e.target.value)}>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId='password' className="py-md-2">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" value={password}
            onChange={(e) => setPassword(e.target.value)}>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId='confirmPassword' className="py-md-2">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm your password" value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}>
            </Form.Control>
          </Form.Group>

          <Button type="submit" className="w-100 mt-3" variant="primary">Update your informations</Button>
        </Form>
        </Col>
        <Col md={9}>
          <h2>My orders</h2>
        </Col>
      </Row>
  )
};

export default Profile;

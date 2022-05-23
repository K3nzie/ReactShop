import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { register } from '../actions/userActions.js';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const userRegister = useSelector(state => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const location = useLocation();
  const navigate = useNavigate();

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if(userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    // Dispatch Register
    if(password !== confirmPassword) {
      setMessage('Passwords do not match, please retry');
    } else {
      dispatch(register(name, email, password));
    }

  } // submitHandler


  return (
    <FormContainer>
      <h1>Sign Up</h1>
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

        <Button type="submit" className="w-100 mt-3" variant="primary">Register</Button>
      </Form>

      <Row className="py-3">
        <Col>
          Already have an account ? <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Login</Link>
        </Col>
      </Row>
    </FormContainer>
  )
};

export default Register;

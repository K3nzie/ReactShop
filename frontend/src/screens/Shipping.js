import React, { useState } from 'react';
import { useDispatch, useSelector, useEffect } from 'react-redux';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import countries from '../countries.json';
import { saveShippingAddress } from '../actions/cartActions.js';
import CheckoutSteps from '../components/CheckoutSteps';

const Shipping = () => {
  const cart = useSelector(state => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const countriesList = countries;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate('/payment');

  }

  return (
    <FormContainer>
    <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler} className="my-3">
        <Form.Group controlId='address' className="py-md-2">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter address" value={address} required
          onChange={(e) => setAddress(e.target.value)}>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='city' className="py-md-2">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="Enter city" value={city} required
          onChange={(e) => setCity(e.target.value)}>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='postalCode' className="py-md-2">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control type="text" placeholder="Enter postal code" value={postalCode} required
          onChange={(e) => setPostalCode(e.target.value)}>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='country' className="py-md-2">
          <Form.Label>Country</Form.Label>
          <Form.Select aria-label="Address" value={country} required onChange={(e) => setCountry(e.target.value)}>
            <option>Select your country</option>
            { countriesList.map((c, k) => {
              return(
              <option key={k} value={c.name.toLowerCase()}>{c.name}</option>
              )
            }) }
          </Form.Select>
        </Form.Group>

        <Button type="submit" variant="primary">Continue</Button>

      </Form>
    </FormContainer>
  )
};

export default Shipping;

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product.slug}`}>
        <Card.Img className="hovered-card" src={product.image} variant='top' style={{width: '100%', height: '15vw', objectFit: 'cover'}} />
      </Link>

      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title className="text-center" as='div'><strong>{product.name}</strong></Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        </Card.Text>

        <Card.Text as='h3'>
          ${product.price}
        </Card.Text>

      </Card.Body>
    </Card>
  );

};

Rating.defaultProps = {
  color: '#f8e825'
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string
}

export default Product;

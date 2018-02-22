import React from 'react';
import { Col } from 'reactstrap';
import PropTypes from 'prop-types';

 const Product = (props) => {
  return (
  <Col xs={6} md={3} lg={3} xl={2}>
    <div className="product-card card">
      <img className="card-img-top" src={props.imageUrl} alt="Product" />
      <div className="card-block">
        <div className="card-title pt-2">{props.title}</div>
      </div>
    </div>
  </Col>
  )
};

export default Product;

Product.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title:    PropTypes.string.isRequired 
}
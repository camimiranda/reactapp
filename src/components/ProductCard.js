import React, {Component} from 'react';
import { Link } from "react-router-dom";
import CardWrapper  from './Card.js';

class ProductCard extends Component {
  render() {
    
    return (
      <div className='productCardContainer'>
      <Link to={`product/${this.props.product.id}`}>
        <CardWrapper 
            alt='product'
            product={this.props.product}
        />
        </Link>
      </div>
    );
  }
}

export default ProductCard

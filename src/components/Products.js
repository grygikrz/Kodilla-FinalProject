import React from 'react'
import Product from './Product'

const Products = (props) => {
  var products = props.items ? props.items : '';
  var prodts = products.map(function(prod) {
        return <Product key={prod.id} items={prod}/>
  });
  return (
    <div className={'row'}>{prodts}</div>
  );
}


export default Products;

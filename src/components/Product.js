import React from 'react'

const Product = (props) => {

  return (
    <div className={'col-lg-4 col-md-6 mb-4'}>
            <div className={'card h-100'}>
                <small className={'text-muted'}>{props.items.status}</small>
              <a href="#"><img className={'productImage'} src={props.items.image} /></a>
              <div className={'card-body'}>
                <h4 className={'card-title'}>
                  <a href="#">{props.items.name}</a>
                </h4>
                <h5>{props.items.price}</h5>
                <p className={'card-text'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
              </div>
              <div className={'card-footer'}>
              </div>
            </div>
        </div>
);
}

export default Product;

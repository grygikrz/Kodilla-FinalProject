import React from "react";
import Products from './Products'
import Sidebar from './Sidebar'
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Badge from 'react-bootstrap/Badge'
import ListGroup from 'react-bootstrap/ListGroup'

var products = [
  {
    id: 1,
    name: 'Product 1',
    price: '$69.00',
    status: 'Nowość',
    image: '/images/Warstwa1.png'
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$69.00',
    status: 'Nowość',
    image: '/images/Warstwa2.png'
  },
  {
    id: 3,
    name: 'Product 3',
    price: '$69.00',
    status: 'Nowość',
    image: '/images/Warstwa3.png'
  },
  {
    id: 4,
    name: 'Product 4',
    price: '$69.00',
    status: 'Nowość',
    image: '/images/Warstwa4.png'
  },
  {
    id: 5,
    name: 'Product 5',
    price: '$69.00',
    status: 'Nowość',
    image: '/images/Warstwa6.png'
  },
  {
    id: 6,
    name: 'Product 6',
    price: '$69.00',
    status: 'Nowość',
    image: '/images/Warstwa7.png'
  }
];

export class Root extends React.Component {
  render() {
    return (
    <Row>
        <div className="col-md-3 order-md-1 mb-3">
        <h4>Sort by <Badge variant="success">Product name A-Z</Badge></h4>
        <ListGroup as="ul">
          <ListGroup.Item as="li" active>Product name A-Z</ListGroup.Item>
          <ListGroup.Item as="li">Product name Z-A</ListGroup.Item>
          <ListGroup.Item as="li" disabled>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item as="li">Price descending</ListGroup.Item>
          <ListGroup.Item as="li">Price ascending</ListGroup.Item>
        </ListGroup>
        </div>
        <div className="col-md-9 order-md-2">
                <Carousel>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="holder.js/800x400?text=First slide&bg=373940"
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3>First slide label</h3>
                          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="holder.js/800x400?text=Second slide&bg=282c34"
                          alt="Third slide"
                        />

                        <Carousel.Caption>
                          <h3>Second slide label</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="holder.js/800x400?text=Third slide&bg=20232a"
                          alt="Third slide"
                        />

                        <Carousel.Caption>
                          <h3>Third slide label</h3>
                          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                  </Carousel>

                  <Products items={products} />
            </div>
      </Row>
  );
  }
}

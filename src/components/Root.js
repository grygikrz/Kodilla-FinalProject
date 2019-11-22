import React from "react";
import Products from './Products'
import Sidebar from './Sidebar'
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Badge from 'react-bootstrap/Badge'
import ListGroup from 'react-bootstrap/ListGroup'



export class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Product name A-Z'
    };
  }

  productSort = (sort) => {

    if(sort === this.state.title) { return }
    //
    // switch (sort) {
    //   case 'Product name A-Z':
    //     products.sort((a,b) => ((a.name > b.name) - (a.name < b.name)))
    //
    //     break;
    //   case 'Product name Z-A':
    //     products.sort((a,b) => ((a.name < b.name) - (a.name > b.name)))
    //     break;
    //   case 'Price descending':
    //     products.sort((a,b) => (parseFloat(a.price) - parseFloat(b.price)))
    //
    //       break;
    //   case 'Price ascending':
    //     products.sort((a,b) => (parseFloat(b.price) - parseFloat(a.price)))
    //       break;
    //   default:
    //     products
    // }

  }

  toggleSort = (e) => {
    e.preventDefault();
    this.productSort(e.target.innerText)
    this.setState({title: e.target.innerText})

    e.target.parentNode.parentNode.querySelectorAll('.active').forEach((item) => item.classList.remove('active'))
    e.target.parentNode.className += ' active'

  }

  render() {
    return (
    <Row>
        <div className="col-md-3 order-md-1 mb-3">
        <h4>Sort by <Badge variant="success">{this.state.title}</Badge></h4>
        <ListGroup as="ul">
          <ListGroup.Item as="li" active><a href="#" onClick={this.toggleSort}>Product name A-Z</a></ListGroup.Item>
          <ListGroup.Item as="li"><a href="#" onClick={this.toggleSort}>Product name Z-A</a></ListGroup.Item>
          <ListGroup.Item as="li"><a href="#" onClick={this.toggleSort}>Price descending</a></ListGroup.Item>
          <ListGroup.Item as="li"><a href="#" onClick={this.toggleSort}>Price ascending</a></ListGroup.Item>
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
                  <Products />
            </div>
      </Row>
  );
  }
}

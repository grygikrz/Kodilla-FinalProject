import React from "react";
import Products from './Products'
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Badge from 'react-bootstrap/Badge'
import ListGroup from 'react-bootstrap/ListGroup'
import { sortItems } from './actions/sortItems'
import { connect } from 'react-redux'
import Item1 from '../images/c1.jpg'
import Item2 from '../images/c2.jpg'
import Item3 from '../images/c3.jpg'

// Main View / Component of Shop add
class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Product name A-Z'
    };
  }

  productSort = (items,type) => {
      this.props.sortedItems(items,type);
  }

  toggleSort = (e) => {
    this.setState({title: e.target.innerText})
    this.productSort(this.props.items,e.target.innerText)
    e.target.parentNode.parentNode.querySelectorAll('.active').forEach((item) => item.classList.remove('active'))
    e.target.parentNode.className += ' active'
  }

  render() {
    return (

    <Row>
        <div className="col-md-3 order-md-1 mb-3">

        <ListGroup as="ul" variant="flush">
          <ListGroup.Item action variant="light" active><a  onClick={this.toggleSort}>Product name A-Z</a></ListGroup.Item>
          <ListGroup.Item action variant="light"><a onClick={this.toggleSort}>Product name Z-A</a></ListGroup.Item>
          <ListGroup.Item action variant="light"><a onClick={this.toggleSort}>Price descending</a></ListGroup.Item>
          <ListGroup.Item action variant="light"><a onClick={this.toggleSort}>Price ascending</a></ListGroup.Item>
        </ListGroup>

                <h6 style={{margin: '10px',float: 'right'}}>Sorted by <Badge variant="light sort">{this.state.title}</Badge></h6>
        </div>
        <div className="col-md-9 order-md-2">
                <Carousel>
                        <Carousel.Item>
                            <img className="d-block w-100" src={Item1} alt="First slide" />
                            <Carousel.Caption>
                              <h3>First slide label</h3>
                              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img className="d-block w-100" src={Item2} alt="Second slide" />
                            <Carousel.Caption>
                              <h3>Second slide label</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                              <img className="d-block w-100" src={Item3} alt="Third slide" />
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

const mapStateToProps = (state) => {

  return {
      items: state.items,
      sort: state.sorted,
      type: state.type
       }
     }

const mapDispatchToProps = (dispatch)=>{

    return{

        sortedItems: (items,type)=>{
          switch (type) {
            case 'Product name A-Z':
                dispatch(sortItems(items,'SORT_ITEMS_AZ'))
              break;
            case 'Product name Z-A':
                dispatch(sortItems(items,'SORT_ITEMS_ZA'))
              break;
            case 'Price descending':
                dispatch(sortItems(items,'SORT_ITEMS_PRICED'))
              break;
            case 'Price ascending':
                dispatch(sortItems(items,'SORT_ITEMS_PRICEI'))
              break;
            default:
          }

        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Root)

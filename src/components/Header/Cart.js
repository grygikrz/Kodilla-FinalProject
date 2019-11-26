import React from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/fontawesome-free-solid'
import { faTrash } from '@fortawesome/fontawesome-free-solid'
import { itemRemove,addQuantity,subtractQuantity} from '../actions/cartAction'
import './Cart.css'
import CartStatus from './CartStatus'


class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      count: 0
    };
  }
  togglePopup = () => {
    this.setState({show: !this.state.show});
  }

  itemRemove = (id) => {
      this.props.itemRemove(id);
  }

  handleAddQuantity = (id, count) => {
      this.props.addQuantity(id);
      this.setState({count: count})
  }

  handleSubtractQuantity = (id, count) => {
      this.props.subtractQuantity(id);
      this.setState({count: count})
  }

  render() {
    let productAdded = this.props.items ?
            (
                this.props.items.map(item=>{
                    return(
                      <div className="row">
                          <div className="col-12 col-sm-12 col-md-2 text-center">
                                  <img className="img-responsive" src={item.image} alt="prewiew" width="120" />
                          </div>
                          <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                              <h6 className="product-name"><strong>{item.name}</strong></h6>
                              <h4>
                                  <small>{item.desc}</small>
                              </h4>
                          </div>
                          <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                              <div className="col-3 col-sm-3 col-md-6 text-md-right" style={{paddingTop: '5px'}}>
                                  <h6><strong>{item.price} <span className="text-muted">x</span></strong></h6>
                              </div>
                              <div className="col-4 col-sm-4 col-md-4">
                                  <div className="quantity">

                                      <input type="button" value="+" onClick={()=>{this.handleAddQuantity(item.id, item.quantity)}} className="plus" />
                                      <input type="number" step="1" max="99" min="1" value={item.quantity} title="Qty" className="qty"
                                             size="4" />
                                      <input type="button" value="-" onClick={()=>{this.handleSubtractQuantity(item.id, item.quantity)}} className="minus" />
                                  </div>
                              </div>
                              <div className="col-2 col-sm-2 col-md-2 text-right">
                                  <button type="button" className="btn btn-outline-danger btn-xs" onClick={()=>{this.itemRemove(item.id)}}>
                                      <FontAwesomeIcon icon={["fas", "trash"]}/>
                                  </button>
                              </div>
                          </div>
                          </div>
                        )
                    })
                ):

                 (
                    <h3>Your basket is empty</h3>
                 )
         return(
      <>
        <Button variant="primary" onClick={()=>{this.togglePopup()}}>
          <FontAwesomeIcon icon={["fas", "cart-arrow-down"]}/>
          <span className="total-item">{this.props.items ? this.props.items.length : 0 }</span>
        </Button>


    <Modal show={this.state.show} onHide={this.togglePopup}>
      <Modal.Header className="card-header bg-dark text-light">
              <FontAwesomeIcon icon={["fas", "cart-arrow-down"]}/>
              <h5>Shipping cart</h5>
              <a href="#" onClick={this.togglePopup} className="btn btn-warning btn-sm pull-right">Return to shop</a>
              <div className="clearfix"></div>
      </Modal.Header>

      <Modal.Body>

          <div className="card-body">


              {productAdded}



          </div>


      </Modal.Body>

      <Modal.Footer className="card-footer">
                        <CartStatus />
      </Modal.Footer>
    </Modal>
    </>
      );
    }
  }

  const mapStateToProps = (state) => {
    return{
        items: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        itemRemove: (id)=>{dispatch(itemRemove(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)

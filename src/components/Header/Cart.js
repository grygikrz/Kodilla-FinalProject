import React from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/fontawesome-free-solid'
import { faTrash } from '@fortawesome/fontawesome-free-solid'
import { itemRemove,addQuantity,subtractQuantity} from '../actions/cartAction'
import './Cart.css'



class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }
  togglePopup = () => {
    this.setState({show: !this.state.show});
  }

  //to remove the item completely
  itemRemove = (id) => {
      this.props.itemRemove(id);
  }
  //to add the quantity
  handleAddQuantity = (id) => {
      this.props.addQuantity(id);
  }
  //to substruct from the quantity
  handleSubtractQuantity = (id) => {
      this.props.subtractQuantity(id);
  }

  render() {
    let productAdded = this.props.items ?
            (
                this.props.items.map(item=>{
                    return(
                      <div className="row">
                          <div className="col-12 col-sm-12 col-md-2 text-center">
                                  <img className="img-responsive" src={item.img} alt="prewiew" width="120" height="80" />
                          </div>
                          <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                              <h4 className="product-name"><strong>{item.name}</strong></h4>
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
                                      <input type="button" value="+" className="plus" />
                                      <input type="number" step="1" max="99" min="1" value="1" title="Qty" className="qty"
                                             size="4" />
                                      <input type="button" value="-" className="minus" />
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
                    <p>Your basket is empty</p>
                 )
         return(
      <>
        <Button variant="primary" onClick={this.togglePopup}>
          <FontAwesomeIcon icon={["fas", "cart-arrow-down"]}/>
        </Button>


    <Modal show={this.state.show} onHide={this.togglePopup}>
      <Modal.Header className="card-header bg-dark text-light">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              Shipping cart
              <a href="" className="btn btn-outline-info btn-sm pull-right">Continiu shopping</a>
              <div className="clearfix"></div>
      </Modal.Header>

      <Modal.Body>

          <div className="card-body">


              {productAdded}



          </div>


      </Modal.Body>

      <Modal.Footer className="card-footer">
          <div className="coupon col-md-5 col-sm-5 no-padding-left pull-left">
              <div className="row">
                  <div className="col-6">
                      <input type="text" className="form-control" placeholder="cupone code" />
                  </div>
                  <div className="col-6">
                      <input type="submit" className="btn btn-default" value="Use cupone" />
                  </div>
              </div>
          </div>
          <div className="pull-right" style={{margin: '10px'}}>
              <a href="" className="btn btn-success pull-right">Checkout</a>
              <Button variant="secondary" onClick={this.togglePopup}>
                Close
              </Button>
              <div className="pull-right" style={{margin: '5px'}}>
                  Total price: <b>50.00€</b>
                </div>
            </div>
      </Modal.Footer>
    </Modal>
    </>
      );
    }
  }

  const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
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

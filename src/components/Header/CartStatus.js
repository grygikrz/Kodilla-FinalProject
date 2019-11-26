import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

// Modal Cart component - here is code of returning info from reducers about price
class CartStatus extends Component{
  constructor() {
    super();
    this.state = {
      discountinfo: ''
    };
  }
    componentWillUnmount() {
         if(this.refs.transport.checked)
              this.props.RemovingTransport()
    }

    Checked = (e)=>{
        if(e.target.checked){
            this.props.Checked();
        }
        else{
            this.props.RemovingTransport();
        }
    }

    adDiscount = (event)=>{

        let code = event.target.value;
        let flag = false
        if (this.props.total == 0){
          this.setState({discountinfo: 'Your basket is empty!'})
        }
        if (code === 'MEGADISCOUNT') {
          flag = true
          event.target.disabled = true;
          this.props.addDiscount()
          return this.setState({discountinfo: 'Disscount was applied'})
        }
        // if (code !== 'MEGADISCOUNT') {
        //   flag = false
        //   this.props.RemovingDiscount()
         else{
          this.setState({discountinfo: 'Wrong discount code!'})
        }
      }
    togglePopup = () => {
      this.setState({show: !this.state.show});
    }
    render(){

        return(
          <>
          <div className="coupon col-md-5 col-sm-5 no-padding-left pull-left">
              <div className="row">

                  <small>Apply Your Discount Here:</small>
                      <input type="text" ref="cupone" onChange={this.adDiscount} className="form-control" placeholder="cupone code" />
                      <small>{this.state.discountinfo}</small>

              </div>
          </div>
          <div className="row" style={{margin: '15px'}}>

            <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
              ref="transport"
              label="Transport +5$"
              onChange={this.Checked}
            />
          </Form>

          </div>
          <div className="row">
            <b>Total: {(this.props.total >= 0) ? this.props.total : 0} $</b>
          </div>
          <div className="row" style={{margin: '15px'}}>
              <a href="" className="btn btn-success">Checkout</a>
          </div>
          </>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        Checked: ()=>{dispatch({type: 'ADD_TRANSPORT'})},
        addDiscount: ()=>{dispatch({type: 'ADD_DISCOUNT'})},
        RemovingTransport: ()=>{dispatch({type: 'RMV_TRANSPORT'})},
        RemovingDiscount: ()=>{dispatch({type: 'RMV_DISCOUNT'})},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartStatus)

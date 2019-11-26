import React from 'react'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/fontawesome-free-solid'
import { connect } from 'react-redux'
import './Products.css'
import { addToItemCart } from './actions/cartAction'
import { Link } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import Overlay from 'react-bootstrap/Overlay'
import Tooltip from 'react-bootstrap/Tooltip'

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      target: 'basket'
    };
  }

  handleClick = (id)=>{
    this.props.addToItemCart(id);
    this.setState({show: true});
}
  render() {
            let itemCheck = this.props.sort ? this.props.sort : this.props.items
            let prodts = itemCheck.map( item => {
                return (
                  <div className={'col-lg-4 col-md-6 mb-4'}>
                          <div className={'card h-100'}>
                              <Badge variant="success">{item.status}</Badge>
                            <Link key={item.id} to={"/product/"+item.id}><img className={'productImage'} src={item.image} /></Link>
                            <div className={'card-body'}>
                              <h5 className={'card-title'}>
                                <Link key={item.id} to={"/product/"+item.id}>
                                    {item.name}
                                </Link>
                              </h5>
                              <h5>$ {item.price}</h5>
                              <p className={'card-text'}>{item.desc}</p>
                            </div>
                            <div className={'card-footer'}>
                            <Button variant="primary" ref='basket' onClick={()=>{this.handleClick(item.id)}}>
                              <FontAwesomeIcon icon={["fas", "cart-arrow-down"]}/>
                            </Button>
                            <Overlay target={this.state.target.current} show={this.state.show} placement="auto">
  {props => (
    <Tooltip id="overlay-example" {...props}>
      My Tooltip
    </Tooltip>
  )}
</Overlay>

                            </div>
                          </div>
                      </div>
                    )})
      return (
        <div className={'row'}>{prodts}</div>
      );
      }
    }

    const mapStateToProps = (state) => {

      return {
          items: state.items,
          sort: state.sorted
           }
         }
    const mapDispatchToProps= (dispatch)=>{

         return{
             addToItemCart: (id)=>{dispatch(addToItemCart(id))}
         }
     }

export default connect(mapStateToProps,mapDispatchToProps)(Products)

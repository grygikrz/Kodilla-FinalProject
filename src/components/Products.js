import React from 'react'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/fontawesome-free-solid'
import { connect } from 'react-redux'
import './Products.css'
import { addToItemCart } from './actions/cartAction'

class Products extends React.Component {
  handleClick = (id)=>{
    this.props.addToItemCart(id);
}
  render() {
    console.log(this.props);


            let itemCheck = this.props.sort ? this.props.sort : this.props.items
            let prodts = itemCheck.map( item => {
                return (
                  <div className={'col-lg-4 col-md-6 mb-4'}>
                          <div className={'card h-100'}>
                              <small className={'text-muted'}>{item.status}</small>
                            <a href="#"><img className={'productImage'} src={item.image} /></a>
                            <div className={'card-body'}>
                              <h4 className={'card-title'}>
                                <a href="#">{item.name}</a>
                              </h4>
                              <h5>{item.price}</h5>
                              <p className={'card-text'}>{item.desc}</p>
                            </div>
                            <div className={'card-footer'}>
                            <Button variant="primary" onClick={()=>{this.handleClick(item.id)}}>
                              <FontAwesomeIcon icon={["fas", "cart-arrow-down"]}/>Add to Cart
                            </Button>
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

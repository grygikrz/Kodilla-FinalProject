import React from 'react'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/fontawesome-free-solid'
import { connect } from 'react-redux'
import './Products.css'
import { addToItemCart } from './actions/cartAction'
import { Link } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import Toast from 'react-bootstrap/Toast'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


// Products for root component to display in cards 
class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      target: 'basket',
      numberOfItems: 0
    };
  }

    handleTotal = (num) => {
        this.setState({numberOfItems: num});
    }
//add item to cart and to show popup
  handleClick = (id)=>{
      this.props.addToItemCart(id);
      let toast = document.getElementById(id)
      let pop = toast ? toast : null
      pop.classList.add('show')
      setTimeout(() => {toast.classList.remove('show')}, 1000)
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
                            <Button variant="primary" onClick={()=>{this.handleClick(item.id)}}>
                              <FontAwesomeIcon icon={["fas", "cart-arrow-down"]}/>
                            </Button>
                            </div>
                          </div>
                          <Toast id={item.id} ref='pop' show={this.state.show}>
                            <Toast.Body>Product was added</Toast.Body>
                          </Toast>
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

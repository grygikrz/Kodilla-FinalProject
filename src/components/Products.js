import React from 'react'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/fontawesome-free-solid'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
      items: state.items
       }
     }

class Products extends React.Component {
  render() {
            let sorted = this.props.items.sort((a,b) => (b.name < b.name) ? 1 : -1)
            console.log(sorted);
            let prodts = sorted.map(item=>{
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
                              <p className={'card-text'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                            </div>
                            <div className={'card-footer'}>
                            <Button variant="primary">
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


export default connect(mapStateToProps)(Products)

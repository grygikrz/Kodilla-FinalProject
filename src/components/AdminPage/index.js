import React from 'react'
import './AdminPage.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { addToItemCart } from '../actions/cartAction'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/fontawesome-free-solid'
import { connect } from 'react-redux'
import { getProduct } from '../actions/sortItems'
import Badge from 'react-bootstrap/Badge'
import Overlay from 'react-bootstrap/Overlay'

// Component with Product page
class AdminPage extends React.Component {


  render() {
    return (
      <>
      <p>Admin</p>
      </>
);
}
}
      const mapStateToProps = (state) => {

        return {
            item: state.item
             }
           }
     const mapDispatchToProps = (dispatch)=>{

          return{
              getItem: (id)=>{dispatch(getProduct(id))},
              addToItemCart: (id)=>{dispatch(addToItemCart(id))}
          }
      }

export default connect(mapStateToProps,mapDispatchToProps)(AdminPage)

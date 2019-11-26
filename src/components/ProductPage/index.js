import React from 'react'
import './ProductPage.css'
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
class ProductPage extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      target: 'basket'
    };
  }
    componentDidMount() {
      this.getProd();
    }

  getProd = () => {
    this.props.getItem(parseInt(this.props.match.params.productid))
  }

  handleClick = (id) => {
    this.setState({show: true});
    this.props.addToItemCart(id);
  }

  render() {
    let product = this.props.item ? this.props.item : ''
    return (
      <>
      <Row>
        <Col sm={4}>
        <Badge variant="success">{product.status}</Badge>
          			<center>
          					<Image src={product.image} fluid />
          			</center>

        </Col>

        <Col sm={8}>
            <div className="product-title">{product.name}</div>
            <div className="product-desc">{product.desc}</div>
            <div className="product-price">$ {product.price}</div>
                <Button variant="primary" onClick={()=>{this.handleClick(product.id)}}>
                  <FontAwesomeIcon icon={["fas", "cart-arrow-down"]}/>Add to Cart
                </Button>
                <Overlay target={this.state.target.current} show={this.state.show} ref='basket' placement="right">
                    {({
                      placement,
                      scheduleUpdate,
                      arrowProps,
                      outOfBoundaries,
                      show: _show,
                      ...props
                    }) => (
                      <div
                        {...props}
                        style={{
                          backgroundColor: '#28a745',
                          padding: '48px 9px',
                          color: 'white',
                          borderRadius: 61,
                          ...props.style,
                        }}
                      >
                        Added to Cart!
                      </div>
                    )}
                  </Overlay>
        </Col>
      </Row>

      <Row>
        <Col sm={12}>

        <Tabs defaultActiveKey="DESCRIPTION" id="uncontrolled-tab-example">
            <Tab eventKey="DESCRIPTION" title="DESCRIPTION">
              <br />
              <b>The Corsair Gaming Series GS600 power supply is the ideal price-performance solution for building or upgrading a Gaming PC. A single +12V rail provides up to 48A of reliable, continuous power for multi-core gaming PCs with multiple graphics cards. The ultra-quiet, dual ball-bearing fan automatically adjusts its speed according to temperature, so it will never intrude on your music and games. Blue LEDs bathe the transparent fan blades in a cool glow. Not feeling blue? You can turn off the lighting with the press of a button.</b>
              <br /><br /><br />
              <h3>Lorem ipsum:</h3>
              <li>It supports the latest ATX12V v2.3 standard and is backward compatible with ATX12V 2.2 and ATX12V 2.01 systems</li>
              <li>An ultra-quiet 140mm double ball-bearing fan delivers great airflow at an very low noise level by varying fan speed in response to temperature</li>
              <li>80Plus certified to deliver 80% efficiency or higher at normal load conditions (20% to 100% load)</li>
              <li>0.99 Active Power Factor Correction provides clean and reliable power</li>
              <li>Universal AC input from 90~264V — no more hassle of flipping that tiny red switch to select the voltage input!</li>
              <li>Extra long fully-sleeved cables support full tower chassis</li>
              <li>A three year warranty and lifetime access to Corsair’s legendary technical support and customer service</li>
              <li>Over Current/Voltage/Power Protection, Under Voltage Protection and Short Circuit Protection provide complete component safety</li>
              <li>Dimensions: 150mm(W) x 86mm(H) x 160mm(L)</li>
              <li>MTBF: 100,000 hours</li>
              <li>Safety Approvals: UL, CUL, CE, CB, FCC className B, TÜV, CCC, C-tick</li>

            </Tab>
            <Tab eventKey="PRODUCT INFO" title="PRODUCT INFO">

              <br />
              <b>The Corsair Gaming Series GS600 power supply is the ideal price-performance solution for building or upgrading a Gaming PC. A single +12V rail provides up to 48A of reliable, continuous power for multi-core gaming PCs with multiple graphics cards. The ultra-quiet, dual ball-bearing fan automatically adjusts its speed according to temperature, so it will never intrude on your music and games. Blue LEDs bathe the transparent fan blades in a cool glow. Not feeling blue? You can turn off the lighting with the press of a button.</b>
              <br /><br /><br />

              <h3>Lorem ipsum:</h3>
              <li>It supports the latest ATX12V v2.3 standard and is backward compatible with ATX12V 2.2 and ATX12V 2.01 systems</li>
              <li>An ultra-quiet 140mm double ball-bearing fan delivers great airflow at an very low noise level by varying fan speed in response to temperature</li>
              <li>80Plus certified to deliver 80% efficiency or higher at normal load conditions (20% to 100% load)</li>
              <li>0.99 Active Power Factor Correction provides clean and reliable power</li>
              <li>Universal AC input from 90~264V — no more hassle of flipping that tiny red switch to select the voltage input!</li>
              <li>Extra long fully-sleeved cables support full tower chassis</li>
              <li>A three year warranty and lifetime access to Corsair’s legendary technical support and customer service</li>
              <li>Over Current/Voltage/Power Protection, Under Voltage Protection and Short Circuit Protection provide complete component safety</li>
              <li>Dimensions: 150mm(W) x 86mm(H) x 160mm(L)</li>
              <li>MTBF: 100,000 hours</li>
              <li>Safety Approvals: UL, CUL, CE, CB, FCC className B, TÜV, CCC, C-tick</li>

            </Tab>
            <Tab eventKey="REVIEWS" title="REVIEWS">

            <br />
              <b>The Corsair Gaming Series GS600 power supply is the ideal price-performance solution for building or upgrading a Gaming PC. A single +12V rail provides up to 48A of reliable, continuous power for multi-core gaming PCs with multiple graphics cards. The ultra-quiet, dual ball-bearing fan automatically adjusts its speed according to temperature, so it will never intrude on your music and games. Blue LEDs bathe the transparent fan blades in a cool glow. Not feeling blue? You can turn off the lighting with the press of a button.</b>
              <br /><br /><br />

              <h3>Lorem ipsum:</h3>
              <li>It supports the latest ATX12V v2.3 standard and is backward compatible with ATX12V 2.2 and ATX12V 2.01 systems</li>
              <li>An ultra-quiet 140mm double ball-bearing fan delivers great airflow at an very low noise level by varying fan speed in response to temperature</li>
              <li>80Plus certified to deliver 80% efficiency or higher at normal load conditions (20% to 100% load)</li>
              <li>0.99 Active Power Factor Correction provides clean and reliable power</li>
              <li>Universal AC input from 90~264V — no more hassle of flipping that tiny red switch to select the voltage input!</li>
              <li>Extra long fully-sleeved cables support full tower chassis</li>
              <li>A three year warranty and lifetime access to Corsair’s legendary technical support and customer service</li>
              <li>Over Current/Voltage/Power Protection, Under Voltage Protection and Short Circuit Protection provide complete component safety</li>
              <li>Dimensions: 150mm(W) x 86mm(H) x 160mm(L)</li>
              <li>MTBF: 100,000 hours</li>
              <li>Safety Approvals: UL, CUL, CE, CB, FCC className B, TÜV, CCC, C-tick</li>

            </Tab>
          </Tabs>


        </Col>
      </Row>
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

export default connect(mapStateToProps,mapDispatchToProps)(ProductPage)

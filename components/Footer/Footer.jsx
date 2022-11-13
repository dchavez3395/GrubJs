import React from 'react'
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'
import logo from '../../assets/images/res-logo.png'
import '../../styles/footer.css'


const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6'>
            <div className="footerLogo text-start">
              <img src={logo} alt="logo" />
              <h5>Grub.js</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit consequatur magnam libero fugiat.</p>
            </div>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footerTitle'>Delivery Time</h5>
            <ListGroup className='deliverTimeList'>
              <ListGroupItem className='border-0 ps-0 deliveryTimeItem'>
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>
              <ListGroupItem className='border-0 ps-0 deliveryTimeItem'>
                <span>Friday - Saturday</span>
                <p>11:00am - 6:00pm</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footerTitle'>Contact</h5>
              <ListGroup className='deliverTimeList'>
              <ListGroupItem className='border-0 ps-0 deliveryTimeItem'>
                  <span>Location: 02899 Portage Ave, Winnipeg, Mb</span>
                </ListGroupItem>
                <ListGroupItem className='border-0 ps-0 deliveryTimeItem'>
                  <span>Phone: 204-741-3421</span>
                </ListGroupItem>
                <ListGroupItem className='border-0 ps-0 deliveryTimeItem'>
                  <span>Email: example@gmail.com</span>
                </ListGroupItem>
              </ListGroup>
          </Col>

          <Col lg='3' md='4' sm='6'>
            <h5 className='footerTitle'>Newsletter</h5>
            <p>Subscribe our Newsletter</p>
            <div className='newsletter'>
              <input type="email" placeholder='Enter your email' />
              <span><i className='ri-send-plane-line'></i></span>
            </div>
          </Col>
        </Row>

        <Row className='mt-5'>
          <Col lg='g' md='6'>
            <p className='copyrightText'>Website made by <span>Daniel Chavez</span>.</p>
          </Col>
          <Col lg='g' md='6'>
            <div className='socialLinks justify-content-end d-flex align-items-center gap-4'>
              <p className='m-0'>Follow: </p>
              <span className=''>
                  <i className='ri-facebook-line'></i>
              </span>
              <span className=''>
                  <i className='ri-github-line'></i>
              </span>
              <span className=''>
                  <i className='ri-youtube-line'></i>
              </span>
              <span className=''>
                  <i className='ri-linkedin-line'></i>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
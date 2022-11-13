import React, { useState  } from 'react'
import { useSelector } from 'react-redux'
import CommonSection from '../components/UI/Common-Section/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import {Container, Row, Col} from 'reactstrap'
import '../styles/checkout.css'

const Checkout = () => {

  const [enterName, setEnterName] = useState('')
  const [enterEmail, setEnterEmail] = useState('')
  const [enterNumber, setEnterNumber] = useState('')
  const [enterAddress, setEnterAddress] = useState('')
  const [enterPostalCode, setEnterPostalCode] = useState('')
  const deliveryInfo = []
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount)
  const deliveryFee = 20
  const totalAmount = cartTotalAmount + Number(deliveryFee)

  const submitHandler = (e) => {
    e.preventDefault();

    const userDeliveryAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      address: enterAddress,
      postalCode: enterPostalCode
    };
    
    deliveryInfo.push(userDeliveryAddress);
    console.log(deliveryInfo);
  }

  return (
    <Helmet title='Checkout'>
      <CommonSection title='Checkout' />
      <section>
        <Container>
          <Row>
            <Col lg='8' md='6'>
              <h6 className='mb-4'>Delivery Address</h6>
              <form className='checkoutForm' onSubmit={submitHandler}>
                <div className='formGroup'>
                  <input type="text" placeholder='Enter your name' required onChange={e => setEnterName(e.target.value)} />
                </div>
                <div className='formGroup'>
                  <input type="text" placeholder='Enter your email' required onChange={e => setEnterEmail(e.target.value)} />
                </div>
                <div className='formGroup'>
                  <input type="number" placeholder='Phone number' required onChange={e => setEnterNumber(e.target.value)} />
                </div>
                <div className='formGroup'>
                  <input type="text" placeholder='Street address' required onChange={e => setEnterAddress(e.target.value)} />
                </div>
                <div className='formGroup'>
                  <input type="text" placeholder='Postal Code' required onChange={e => setEnterPostalCode(e.target.value)} />
                </div>
                <button className='addToCart'>Payment</button>
              </form>
            </Col>
            <Col lg='4' md='6'>
              <div className='checkoutBill'>
                <h6 className='align-items-center mb-3 justify-content-between d-flex'>Subtotal: <span>${cartTotalAmount}</span></h6>
                <h6 className='align-items-center mb-3 justify-content-between d-flex'>Delivery: <span>${deliveryFee}</span></h6>
                <div className='checkoutTotal'>
                  <h5 className='align-items-center justify-content-between d-flex'>Total: <span>${totalAmount}</span></h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout

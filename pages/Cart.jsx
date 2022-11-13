import React from 'react'
import CommonSection from '../components/UI/Common-Section/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import { useSelector, useDispatch } from 'react-redux'
import {Container, Row, Col} from 'reactstrap'
import '../styles/cartPage.css'
import {cartActions} from '../store/shopping-cart/cartSlice'
import { Link } from 'react-router-dom'

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)
  return (
    <Helmet title='Cart'>
      <CommonSection title='Your Cart' />
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              {cartItems.length === 0 ? 
              <h5>Your cart is empty </h5> : 
              <table className='table table-bordered'>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => <Tr item={item} key={item.id} /> )}
              </tbody>
            </table>}

            <div className='mt-4'>
              <h6>Subtotal: $<span className='cartSubtotal'>{totalAmount}</span></h6>
              <p>Taxes and delivery calculated at checkout</p>
              <div className='cartPageBtns'>
                <button className='addToCart me-3'><Link to='/' >Continue shopping</Link></button>
                <button className='addToCart'><Link to='/checkout' >Proceed to checkout</Link></button>
              </div>
            </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
};

const Tr =(props) => {
  const {id, image01, title, price, quantity} = props.item
  const dispatch = useDispatch()

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id))
  }

  return (
    <tr>
      <td className='text-center cartImageContainer'><img src={image01} alt="" /></td>
      <td className='text-center'>{title}</td>
      <td className='text-center'>${price}</td>
      <td className='text-center'>{quantity}px</td>
      <td className='text-center dltCartItem'><i className='ri-delete-bin-line' onClick={deleteItem}></i></td>
    </tr>
  )
}

export default Cart

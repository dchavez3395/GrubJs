import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup } from 'reactstrap'
import CartItem from './CartItem'
import '../../../styles/Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { cartUiActions } from '../../../store/shopping-cart/cartUiSlice'

const Carts = () => {
    const dispatch = useDispatch();
    const cartProducts = useSelector(state => state.cart.cartItems)
    const totalAmount = useSelector(state => state.cart.totalAmount)

    const toggleCart = ()=>{
        dispatch(cartUiActions.toggle())
    }
  return (
    <div className='cartContainer'>
        <ListGroup className='cart'>
            <div className='cartClose'>
                <span onClick={toggleCart}><i className='ri-close-fill'></i></span>
            </div>
            <div className='cartItemList'>
                {cartProducts.length === 0 ? (
                    <h6 className='mt-5 text-center'>No items in cart</h6>
                ) : (
                    cartProducts.map((item, i) => (
                        <CartItem item={item} key={i} />
                    ))
                )}
            </div>
            <div className='cartBottom d-flex justify-content-between align-items-center'>
                <h6>Subtotal: <span>${totalAmount}</span></h6>
                <button><Link to='/checkout'>Checkout</Link></button>
            </div>
        </ListGroup>
    </div>
  )
}

export default Carts

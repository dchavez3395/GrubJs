import React from 'react'
import { useDispatch } from 'react-redux'
import { ListGroupItem } from 'reactstrap'
import { cartActions } from '../../../store/shopping-cart/cartSlice'
import '../../../styles/CartItem.css'

const CartItem = ({item}) => {
  const {id, title, price, image01, quantity, totalPrice} = item;
  const dispatch = useDispatch()

  const increaseItem = () => {
    dispatch(cartActions.addItem({
      id, title, price, image01
    }))
  }

   const decreaseItem = () => {
    dispatch(cartActions.removeItem(id))
   }

   const deleteItem = () => {
    dispatch(cartActions.deleteItem(id))
   }

  return (
    <ListGroupItem className='cartItem border-0'>
      <div className='cartItemInfo d-flex gap-2'>
        <img src={image01} alt="" />
        <div className='cartProductInfo d-flex gap-5 w-100 justify-content-between align-items-center'>
            <div>
                <h6 className='cartProductTitle'>{title}</h6>
                <p className='cartProductPrice d-flex gap-5 align-items-center'>{quantity}x <span>${totalPrice}</span></p>
                <div className='PlusMinusSection d-flex justify-content-between align-items-center'>
                    <span className='decreaseBtn' onClick={decreaseItem}><i className='ri-subtract-line'></i></span>
                    <span className='quantity'>{quantity}</span>
                    <span className='increaseBtn' onClick={increaseItem}><i className='ri-add-line'></i></span>
                </div>
            </div>
            <span className='deleteBtn' onClick={deleteItem}><i className='ri-close-line'></i></span>
        </div>
      </div>
    </ListGroupItem>
  )
}

export default CartItem

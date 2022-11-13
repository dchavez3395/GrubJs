import React from 'react'
import { Link } from 'react-router-dom'
import '../../../styles/productCard.css'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../../store/shopping-cart/cartSlice'

const ProductCard = (props) => {
    const {id, title, image01, price} = props.item
    const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };

  return (
    <div className='productItem'>
        <div className='productImg'>
            <img className='w-50' src={image01} alt="productImg" />
        </div>
        <div className='productContent'>
            <h5>
                <Link to={`/foods/${id}`}>
                    {title}
                </Link>
            </h5>
            <div className='align-items-center d-flex justify-content-between'>
                <span className='productPrice'>${price}</span>
                <button className='addToCart' onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard
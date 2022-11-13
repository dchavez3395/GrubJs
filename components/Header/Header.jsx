import React, {useRef, useEffect} from 'react'
import { Container } from 'reactstrap'
import logo from '../../assets/images/res-logo.png'
import {NavLink, Link} from 'react-router-dom'
import '../../styles/header.css'
import { useSelector, useDispatch } from 'react-redux'
import {cartUiActions} from '../../store/shopping-cart/cartUiSlice'

const navLinks = [
  {
    display: 'Home',
    path: '/home'
  },
  {
    display: 'Foods',
    path: '/foods'
  },
  {
    display: 'Cart',
    path: '/cart'
  },
  {
    display: 'Contact',
    path: '/contact'
  }
]

const Header = () => {
  const menuRef = useRef(null)
  const toggleMenu = () => menuRef.current.classList.toggle('showMenu')
  const headerRef = useRef(null)
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const dispatch = useDispatch()
  const toggleCart = () => {
    dispatch(cartUiActions.toggle())
  }

  useEffect(() => {
   window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 80){
      headerRef.current.classList.add('headerShrink')
    } else {
      headerRef.current.classList.remove('headerShrink')
    }
   });
   return () => window.removeEventListener('scroll')
  }, [])

  return (
    <header className='header' ref={headerRef}>
      <Container className='navWrapper d-flex align-items-center justify-content-between'>
        <div className="logo">
          <Link to='/'>
            <img src={logo} alt="logo" />
            <h5>Grub.js</h5>
          </Link>
        </div>

        {/* menu */}
        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
          <div className="menu gap-5 align-items-center d-flex ">
            {navLinks.map((item, i) => (
              <NavLink to={item.path} key={i} className={(navClass) => navClass.isActive ? 'activeMenu' : ''} >
                {item.display}
              </NavLink>
            ))}
          </div>
        </div>
        {/* icons */}
        <div className="navRight gap-4 align-items-center d-flex">
          <span className='cartIcon' onClick={toggleCart}>
            <i className='ri-shopping-basket-line'></i>
            <span className='cartBadge'>{totalQuantity}</span>
          </span>
          <span>
            <Link to='/login'>
              <i className='ri-user-line'></i>
            </Link>
          </span>
          <span className='mobileMenu' onClick={toggleMenu}>
            <i className='ri-menu-line'></i>
          </span>
        </div>
      </Container>
    </header>
  )
}

export default Header
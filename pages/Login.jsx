import React, { useRef, useEffect  } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/Common-Section/CommonSection'
import {Container, Row, Col} from 'reactstrap'
import { Link } from 'react-router-dom'

const Login = () => {

  const loginNameRef = useRef();
  const loginPasswordRef = useRef();
  const submitHandler = e =>{
    e.preventDefault()
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Helmet title='Login'>
      <CommonSection title='Login' />
      <section>
        <Container>
          <Row>
            <Col className='m-auto text-center' lg='6' md='6' sm='12'>
              <form className='form mb-5' onSubmit={submitHandler}>
                <div className='formGroup'>
                  <input type="email" placeholder='Email' required ref={loginNameRef} />
                </div>
                <div className='formGroup'>
                  <input type="password" placeholder='Password' required ref={loginPasswordRef} />
                </div>
                <button type='submit' className='addToCart'>Login</button>
              </form>
              <Link to='/register' >
                Don't have an account? Create one!
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login

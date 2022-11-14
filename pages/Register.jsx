import React, { useRef, useEffect  } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/Common-Section/CommonSection'
import {Container, Row, Col} from 'reactstrap'
import { Link } from 'react-router-dom'

const Register = () => {

  const signUpNameRef = useRef();
  const signUpEmailRef = useRef();
  const signUpPasswordRef = useRef();
  const submitHandler = e =>{
    e.preventDefault()
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <Helmet title='Sign up'>
      <CommonSection title='Sign up' />
      <section>
        <Container>
          <Row>
            <Col className='m-auto text-center' lg='6' md='6' sm='12'>
              <form className='form mb-5' onSubmit={submitHandler}>
                <div className='formGroup'>
                  <input type="text" placeholder='Full name' required ref={signUpNameRef} />
                </div>
                <div className='formGroup'>
                  <input type="email" placeholder='Email' required ref={signUpEmailRef} />
                </div>
                <div className='formGroup'>
                  <input type="password" placeholder='Password' required ref={signUpPasswordRef} />
                </div>
                <button type='submit' className='addToCart'>Sign up</button>
              </form>
              <Link to='/login' >
                Already have an account? Login.
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Register

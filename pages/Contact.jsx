import React, {useEffect} from 'react'
import { Col, Container } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/Common-Section/CommonSection'

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Helmet title='Contact'>
      <CommonSection title='Contact us' />
      <section>
        <Container>
          <Col>
          <form className='form mb-5'>
                <div className='formGroup'>
                  <input type="email" placeholder='Email' required />
                </div>
                <div className='formGroup'>
                  <input type="password" placeholder='Password' required />
                </div>
                <div className='formGroup'>
                  <textarea type="text" rows='6' placeholder='message' required />
                </div>
                <button type='submit' className='addToCart'>Submit</button>
              </form>
          </Col>
        </Container>
      </section>
    </Helmet>
  )
}

export default Contact
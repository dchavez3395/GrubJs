import React, {useState, useEffect} from 'react'
import Helmet from '../components/Helmet/Helmet.js'
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'
import heroImg from '../assets/images/hero.png'
import '../styles/heroSection.css'
import { Link } from 'react-router-dom'
import Category from '../components/UI/category/Category.jsx'
import '../styles/home.css'
import featureImg1 from '../assets/images/service-01.png'
import featureImg2 from '../assets/images/service-02.png'
import featureImg3 from '../assets/images/service-03.png'
import products from '../assets/fake-data/products'
import foodCategoryImg1 from '../assets/images/hamburger.png'
import foodCategoryImg2 from '../assets/images/pizza.png'
import foodCategoryImg3 from '../assets/images/bread.png'
import ProductCard from '../components/UI/product-card/ProductCard.jsx'
import whyImage from '../assets/images/location.png'
import ntwrkImage from '../assets/images/network.png'
import TestimonialSlider from '../components/UI/slider/TestimonialSlider.jsx'

const featureData = [
  {
    title: 'Fast Delivery',
    image: featureImg1,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, hic vel! Laborum del'
  },
  {
    title: 'Dine In',
    image: featureImg2,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, hic vel! Laborum del'
  },
  {
    title: 'Express Pickup',
    image: featureImg3,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, hic vel! Laborum del'
  },
]

const Home = () => {

  const [category, setCategory] = useState('ALL');
  const [allProducts, setAllProducts] = useState(products)

  const [hotPizza, setHotPizza] = useState([])

  useEffect(() => {
    const filteredPizza = products.filter(item => item.category === 'Pizza')
    const slicePizza = filteredPizza.slice(0,4)
    setHotPizza(slicePizza)
  }, [])

  useEffect(() => {

    if(category === 'ALL'){
      setAllProducts(products)
    }

    if(category === 'BURGER'){
      const filteredProducts = products.filter(item => item.category === 'Burger')

      setAllProducts(filteredProducts)
    }

    if(category === 'PIZZA'){
      const filteredProducts = products.filter(item => item.category === 'Pizza')

      setAllProducts(filteredProducts)
    }

    if(category === 'BREAD'){
      const filteredProducts = products.filter(item => item.category === 'Bread')

      setAllProducts(filteredProducts)
    }
  }, [category])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Helmet title='Home'>
      {/* hero */}
      <section>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className='heroContent'>
              <h5 className='mb-3'>Your next meal made easy</h5>
              <h1 className='heroTitle mb-4'><span>HUNGRY?</span> Grub.js got you</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero sint dolorum laboriosam consectetur! Obcaecati.</p>
              <div className='heroBtns align-items-center mt-4 gap-5 d-flex'>
                <button className='align-items-center justify-content-between orderBtn d-flex'>Order now
                  <i className='ri-arrow-right-s-line'></i>
                </button>
                <button className='allFoodsBtn'><Link to='/foods'>All Dishes</Link></button>
              </div>

              <div className='align-items-center mt-2 d-flex gap-5 heroService'>
                <p className='align-items-center d-flex gap-2'><span className='shippingIcon'><i className='ri-car-line'></i>Free Delivery</span></p>
                <p className='align-items-center d-flex gap-2'><span className='shippingIcon'><i className='ri-shield-check-line'></i>Secure Checkout</span></p>
              </div>
            </div>
          </Col>
          <Col lg='6' md='6' >
            <div className='heroImg'>
              <img className='w-100' src={heroImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
      </section>
      {/* categories */}
      <section>
        <Category />
      </section>
      {/* section */}
      <section>
        <Container>
          <Row>
            <Col className='text-center' lg='12'>
              <h5 className='featureSubtitle'>What We Serve</h5>
              <h2 className='featureTitle'>All at your doorstep</h2>
              <h2 className='featureTitle'>we will <span>take care of your needs</span></h2>
              <p className='featureText mt-4 mb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, hic vel! Laborum del</p>
              <p className='featureText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eos itaque officiis dolore</p>
            </Col>
            {featureData.map((item, i) => (
              <Col lg='4' md='6' sm='6' key={i} className='mt-5'>
                <div className='featureItem text-center py-3 px-5'>
                  <img src={item.image} alt="" className='w-25 mb-3'/>
                  <h5 className='mb-3 fw-bold'>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </Col>
            ))}

            <Col lg='4' md='4'></Col>
            <Col lg='4' md='4'></Col>
          </Row>
        </Container>
      </section>
      {/* section */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <h2>Popular Items</h2>
            </Col>

            <Col lg='12'>
              <div className='foodCategory justify-content-center align-center-items d-flex gap-2'>
                <button className={`${category === 'ALL' ? 'foodBtnActive' : ''} allBtn`} onClick={() => setCategory('ALL')}>All</button>
                <button className={`align-items-center d-flex gap-2 ${category === 'BURGER' ? 'foodBtnActive' : ''}`} onClick={() => setCategory('BURGER')}><img src={foodCategoryImg1} alt="" />Burgers</button>
                <button className={`align-items-center d-flex gap-2 ${category === 'PIZZA' ? 'foodBtnActive' : ''}`} onClick={() => setCategory('PIZZA')}><img src={foodCategoryImg2} alt="" />Pizza</button>
                <button className={`align-items-center d-flex gap-2 ${category === 'BREAD' ? 'foodBtnActive' : ''}`} onClick={() => setCategory('BREAD')}><img src={foodCategoryImg3} alt="" />Bread</button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mt-5'>
                <ProductCard item={item}/>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* section */}
      <section className='whyUs'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <img src={whyImage} alt="" className='w-100' />
            </Col>

            <Col lg='6' md='6'>
              <div className='whyGrub'>
                <h2 className='grubTitle mb-4'>Why <span>Grub.js?</span></h2>
                <p className='grubDesc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem voluptate, doloribus maiores, consequatur cumque omnis sed dignissimos reiciendis, nesciunt dolorum sunt temporibus incidunt. Corrupti sint ex officiis repellat in eum!</p>
                <ListGroup className='mt-4'>
                    <ListGroupItem className='ps-0 border-0'>
                        <p className='align-items-cente chooseTitle d-flex gap-2'><i className='ri-checkbox-circle-line'></i>Fresh and Local Ingredients</p>
                        <p className='chooseDesc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolore.</p>
                    </ListGroupItem>
                    <ListGroupItem className='ps-0 border-0'>
                        <p className='align-items-center chooseTitle d-flex gap-2'><i className='ri-checkbox-circle-line'></i>High Quality </p>
                        <p className='chooseDesc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolore.</p>
                    </ListGroupItem>
                    <ListGroupItem className='ps-0 border-0'>
                        <p className='align-items-center chooseTitle d-flex gap-2'><i className='ri-checkbox-circle-line'></i>Contact-less Delivery </p>
                        <p className='chooseDesc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolore.</p>
                    </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* pizza section */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5 text-center' >
              <h2>Deluxe Pizzas</h2>
            </Col>

            {hotPizza.map(item => (
              <Col lg='3' md='4' key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* section */}
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='testimonial'>
                <h5 className='testimonialSub mb-4'>Testimonials</h5>
                <h2 className='testimonialTitle mb-4'>What our <span>awesome</span> customers are saying</h2>
                <p className='testDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ratione quos eum fugit ipsum esse voluptas aut doloremque, labore suscipit.</p>
                <TestimonialSlider />
              </div>
            </Col>
            <Col lg='6' md='6'>
              <img className='w-100' src={ntwrkImage} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home

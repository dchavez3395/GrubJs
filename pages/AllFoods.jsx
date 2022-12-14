import React, { useState, useEffect } from 'react'
import CommonSection from '../components/UI/Common-Section/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import { Col, Container, Row } from 'reactstrap'
import products from '../assets/fake-data/products'
import ProductCard from '../components/UI/product-card/ProductCard'
import '../styles/all-foods.css'
import '../styles/pagination.css'
import ReactPaginate from 'react-paginate'

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [pageNumber, setPageNumber] = useState(0);

  const searchedProduct = products.filter((item) => {
    if (searchTerm.value === '') return item;
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase()))
    return item;
  })
  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage);
  const pageCount = Math.ceil(searchedProduct.length / productPerPage)
  const changePage = ({selected}) => {setPageNumber(selected)}

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Helmet title='All-Dishes'>
      <CommonSection title='All Dishes' />
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='6' xs='12'>
              <div className='searchWidget justify-content-between align-items-center d-flex'>
                <input type="text" placeholder='lemme get uhhhh...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <span><i className='ri-search-line'></i></span>
              </div>
            </Col>
            <Col lg='6' md='6' sm='6' xs='12' className='mb-5' >
              <div className='sortingWidget text-end'>
                <select className='w-50'>
                  <option>Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="High-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>

            {displayPage.map((item) => (
              <Col lg='3' md='4' sm='6' xs='6'  className='mb-4' key={item.id}>
              {''}
              <ProductCard item={item} />
              </Col>
            ))}
            <div>
              <ReactPaginate pageCount={pageCount} onPageChange={changePage} previousLabel='Prev' nextLabel='Next' containerClassName='paginateBtns' />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default AllFoods

import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import categoryImg1 from "../../../assets/images/category-01.png"
import categoryImg2 from "../../../assets/images/category-02.png"
import categoryImg3 from "../../../assets/images/category-03.png"
import categoryImg4 from "../../../assets/images/category-04.png"
import '../../../styles/category.css'


const categoryData = [
    {
        display: 'Fastfood',
        imgUrl: categoryImg1
    },
    {
        display: 'Pizza',
        imgUrl: categoryImg2
    },
    {
        display: 'Asian Food',
        imgUrl: categoryImg3
    },
    {
        display: 'Row Meat',
        imgUrl: categoryImg4
    }
]


const Category = () => {
  return (
    <Container>
        <Row>
            {categoryData.map((item, i) => (
                <Col className='mb-4' lg='3' md='4' sm='6' xs='6' key={i}>
                    <div className='categoryItem align-items-center gap-2 d-flex'>
                        <div className='categoryImg'>
                            <img src={item.imgUrl} alt="" />
                        </div>
                        <h6>{item.display}</h6>
                    </div>
                </Col>
            ))}
        </Row>
    </Container>
  )
}

export default Category
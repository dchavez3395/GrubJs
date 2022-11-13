import React, { useState, useEffect } from "react";
import products from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/Common-Section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import ProductCard from '../components/UI/product-card/ProductCard'
import "../styles/productDetails.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";

const FoodDetails = () => {
  const [tab, setTab] = useState("desc");
  const { id } = useParams();
  const dispatch = useDispatch()
  const product = products.find((product) => product.id === id);
  const [previewImg, setPreviewImg] = useState(product.image01);
  const { title, price, category, desc, image01 } = product;
  const relatedProduct = products.filter((item) => category === item.category);
  const addItem = () => {dispatch(cartActions.addItem({id, title, price, image01}))}
  const [enteredName, setEnteredName] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('')
  const [reviewMsg, setReviewMsg] = useState('')

  const submitHandler = e => {
    e.preventDefault()
    console.log(enteredName, enteredEmail, reviewMsg)
  }

  useEffect(()=>{
    setPreviewImg(product.image01)
  },[product])

  useEffect(() => {
    window.scrollTo(0,0)
  }, [product])

  return (
    <Helmet>
      <CommonSection title={title} />
      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="productImages">
                <div
                  className="imageItem mb-3"
                  onClick={() => setPreviewImg(product.image01)}
                >
                  <img src={product.image01} alt="" className="w-50" />
                </div>
                <div
                  className="imageItem mb-3"
                  onClick={() => setPreviewImg(product.image02)}
                >
                  <img src={product.image02} alt="" className="w-50" />
                </div>
                <div
                  className="imageItem"
                  onClick={() => setPreviewImg(product.image03)}
                >
                  <img src={product.image03} alt="" className="w-50" />
                </div>
              </div>
            </Col>
            <Col lg="4" md="4">
              <div className="productMainImg">
                <img src={previewImg} alt="" className="w-100" />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="singleProductContent">
                <h2 className="productTitle mb-3">{title}</h2>
                <p className="productPrice">
                  {""} Price: <span>${price}</span>
                </p>
                <p className="category mb-5">
                  Category: <span>{category}</span>
                </p>
                <button className="addToCart" onClick={addItem}>Add to Cart</button>
              </div>
            </Col>

            <Col>
              <div className="d-flex align-items-center gap-5 py-3 tabs">
                <h6
                  className={`${tab === "desc" ? "tabActive" : ""} `}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "tabActive" : ""} `}
                  onClick={() => setTab("rev")}
                >
                  Review
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tabContent">
                  <p>{desc}</p>
                </div>
              ) : (
                <div className="tabForm mb-3">
                  <div className="review pt-5">
                    <p className="userName mb-0">John Dough</p>
                    <p className="userEmail ">jdough@example.com</p>
                    <p className="reviewText">great products</p>
                  </div>
                  <div className="review">
                    <p className="userName mb-0">John Dough</p>
                    <p className="userEmail ">jdough@example.com</p>
                    <p className="reviewText">great products</p>
                  </div>
                  <div className="review">
                    <p className="userName mb-0">John Dough</p>
                    <p className="userEmail ">jdough@example.com</p>
                    <p className="reviewText">great products</p>
                  </div>
                  <form className="form" onSubmit={submitHandler}>
                    <div className="formGroup">
                      <input type="text" placeholder="Enter your name" onChange={e => setEnteredName(e.target.value)} required />
                    </div>
                    <div className="formGroup">
                      <input type="text" placeholder="Enter your name" onChange={e => setEnteredEmail(e.target.value)} required />
                    </div>
                    <div className="formGroup">
                      <textarea
                        type="text"
                        placeholder="Enter your name"
                        rows={5}
                        onChange={e => setReviewMsg(e.target.value)}
                        required
                      />
                    </div>
                    <button className="addToCart" type="submit">
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </Col>

            <Col lg='12' className="mb-5 mt-4">
                <h2 className="relatedTitle">You might also like</h2>
            </Col>
              
              {relatedProduct.map((item) => (
                <Col key={item.id} className='mb-4' lg='3' md='4' sm='6' xs='6'>
                  <ProductCard item={item} />
                </Col>
              ))}

          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;

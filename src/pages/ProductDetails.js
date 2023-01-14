import React from "react";
import { Link } from "react-router-dom";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import productImg from "../images/grid/h5.jpg";
import { Container, Row, Col, Image } from "react-bootstrap";
import { EffectCoverflow, Pagination } from "swiper";
import FooterComponent from "../Components/Footer";
import imgGrid from "../images/grid/13.jpg";
import imgGrid1 from "../images/grid/14.jpg";
import imgGrid2 from "../images/grid/15.jpg";
function ProductDetails() {
  return (
    <div>
      <section className="img-banner">
        <Container>
          <div className="banner-caption">
            <h1
              className="h1 text-center"
              data-aos="fade-right"
              data-aos-duration="4000"
            >
              Product Details
            </h1>
            <ul className="unorderedlist">
              <li>
                <Link to="/" className="a">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Shop" className="a">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/Shop/:id" className="a">
                  Product Details
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </section>
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={4}>
              <Image
                src={productImg}
                data-aos="fade-right"
                data-aos-duration="4000"
                className="img-fluid zoom-image-1"
              />
            </Col>
            <Col lg={8} data-aos="fade-right" data-aos-duration="4000">
              
              <h2
                className="typo-title-text mb-4"
                data-aos="fade-left"
                data-aos-duration="4000"
              >
              NATURAL HONEY
              </h2>
              <p
                className="typo-tagline-text"
                data-aos="fade-left mb-4"
                data-aos-duration="4000"
              > <span className="text-black">Price:</span> 15$
              </p>
              <p
                className="paragraph"
                data-aos="fade-left"
                data-aos-duration="4000"
              >
                Sed ut perspiciatis unde omnis iste natus volup tatem
                accusantium doloremque laudantium, totam reperiam, eaque ipsa
                quae ab illo inventore veritatis et qrchitecto beatae vitae
                dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus
                volup tatem accusantium doloremque laudantium, totam reperiam,
                eaque ipsa quae ab illo inventore veritatis et qrchitecto beatae
                vitae dicta sunt explicabo.
              </p>
              <Link to='/Cart' className=" btn btn-main">Add To Cart</Link>

            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5">
        <Container>
          <h1 className="text-center"> Other Products</h1>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={6}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={false}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="zoom-text">
                <Link to="/Shop/:id" className="link">
                  <Image src={imgGrid} className="zoom-image" />
                  <h5 className="text-center">MEDOW HONEY</h5>
                </Link>
              </div> 
            </SwiperSlide>
            <SwiperSlide>
              <div className="zoom-text">
                <Link to="/Shop/:id" className="link">
                  <Image src={imgGrid} className="zoom-image" />
                  <h5 className="text-center">MEDOW HONEY</h5>
                </Link>
              </div> 
            </SwiperSlide>
            <SwiperSlide>
              <div className="zoom-text">
                <Link to="/Shop/:id" className="link">
                  <Image src={imgGrid} className="zoom-image" />
                  <h5 className="text-center">MEDOW HONEY</h5>
                </Link>
              </div> 
            </SwiperSlide>
            <SwiperSlide>
              <div className="zoom-text">
                <Link to="/Shop/:id" className="link">
                  <Image src={imgGrid} className="zoom-image" />
                  <h5 className="text-center">MEDOW HONEY</h5>
                </Link>
              </div> 
            </SwiperSlide>
            <SwiperSlide>
              <div className="zoom-text">
                <Link to="/Shop/:id" className="link">
                  <Image src={imgGrid} className="zoom-image" />
                  <h5 className="text-center">MEDOW HONEY</h5>
                </Link>
              </div> 
            </SwiperSlide>
            <SwiperSlide>
              <div className="zoom-text">
                <Link to="/Shop/:id" className="link">
                  <Image src={imgGrid} className="zoom-image" />
                  <h5 className="text-center">MEDOW HONEY</h5>
                </Link>
              </div> 
            </SwiperSlide>
          </Swiper>
        </Container>
      </section>
      <FooterComponent />
    </div>
  );
}
export default ProductDetails;

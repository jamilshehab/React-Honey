import React from "react";
import imgGrid from "../images/grid/13.jpg";
import imgGrid1 from "../images/grid/14.jpg";
import imgGrid2 from "../images/grid/15.jpg";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import FooterComponent from "../Components/Footer";
function Shop() {
  return (
    <div>
      <section className="img-banner">
        <Container>
          <div className="banner-caption" data-aos="fade-left" data-aos-duration="3000">
            <h1 className="h1 text-center">Shop</h1>
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
            </ul>
          </div>
        </Container>
      </section>
      <section className="py-5">
        <Container>
          <Row className="pt-4">
            <Col lg={3} className="mb-4" data-aos="fade-up" data-aos-duration="3000" >
              <div className="zoom-text">
                <Link to="/Shop/:id" className="link">
                  <Image src={imgGrid} className="zoom-image" />
                  <h5 className="text-center">MEDOW HONEY</h5>

                </Link>

              </div>
            </Col>
            <Col lg={3} className="mb-4" data-aos="fade-up" data-aos-duration="3000" >
              <div className="zoom-text">
                <Link to="/Shop/:id" className="link">
                  <Image src={imgGrid1} className="zoom-image" />
                  <h5 className="text-center">YELLOW FRESH HONEY</h5>

                </Link>

              </div>
            </Col>
            <Col lg={3} className="mb-4" data-aos="fade-up" data-aos-duration="3000" >
              <div className="zoom-text">
                <Link to="/Shop/:id" className="link">
                  <Image src={imgGrid2} className="zoom-image" />
                  <h5 className="text-center">YELLOW FRESH HONEY</h5>

                </Link>

              </div>
            </Col>
            <Col lg={3} className="mb-4" data-aos="fade-up" data-aos-duration="3000" >
              <div className="zoom-text">
                <Link to="/Shop/:id" className="link">
                  <Image src={imgGrid} className="zoom-image" />
                  <h5 className="text-center">YELLOW FRESH HONEY</h5>

                </Link>

              </div>
            </Col>
            <Col lg={3} className="mb-4" data-aos="fade-up" data-aos-duration="3000" >
              <div className="zoom-text">
                <Link to="/Shop/:id" className="link">
                  <Image src={imgGrid1} className="zoom-image" />
                  <h5 className="text-center">MEDOW HONEY</h5>

                </Link>

              </div>
            </Col>
            <Col lg={3} className="mb-4" data-aos="fade-up" data-aos-duration="3000" >
              <div className="zoom-text">
                <Link to="/Shop/:id" className="link">
                  <Image src={imgGrid2} className="zoom-image" />
                  <h5 className="text-center">YELLOW FRESH HONEY</h5>

                </Link>
              </div>
            </Col>
            <Col lg={3} className="mb-4" data-aos="fade-up" data-aos-duration="3000" >
              <div className="zoom-text">
                <Link to="/Shop/:id" className="link">
                  <Image src={imgGrid} className="zoom-image" />
                  <h5 className="text-center">YELLOW FRESH HONEY</h5>
                </Link>
              </div>
            </Col>
            <Col lg={3} className="mb-4" data-aos="fade-up" data-aos-duration="3000" >
              <div className="zoom-text">
                <Link to="/Shop/:id" className="link">
                  <Image src={imgGrid1} className="zoom-image" />
                  <h5 className="text-center">YELLOW FRESH HONEY</h5>

                </Link>
              </div>
            </Col>
            <Col lg={12} className="justify-content-center mt-4 mb-4">
              <div className="pagination">
                <Link className="pagination-link" to="#">
                  &laquo;
                </Link>
                <Link to="" className="pagination-link" href="#">
                  1
                </Link>
                <Link className="pagination-link active" to="#">
                  2
                </Link>
                <Link className="pagination-link" to="#">
                  3
                </Link>
                <Link className="pagination-link" to="#">
                  4
                </Link>
                <Link className="pagination-link" to="#">
                  5
                </Link>
                <Link className="pagination-link" to="#">
                  6
                </Link>
                <Link className="pagination-link" to="#">
                  &raquo;
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <FooterComponent />
    </div>
  );
}
export default Shop;

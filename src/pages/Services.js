import React from "react";
import { Link } from "react-router-dom";
import imgGrid from '../images/grid/h1.jpg'
import imgGrid1 from '../images/grid/h2.jpg'
import imgGrid2 from '../images/grid/h3.jpg'
import imgGrid3 from '../images/grid/h4.jpg'
import imgGrid4 from '../images/grid/h5.jpg'
import imgGrid5 from '../images/grid/h8.jpg'

import {Container,Row,Col,Image,Card} from "react-bootstrap";
import FooterComponent from "../Components/Footer";
function Services(){
    return (
        <div>
    <section className='img-banner'>
     <Container>
    <div className='banner-caption' data-aos="fade-right" data-aos-duration="3000" >
     <h1 className='h1 text-center'>Services</h1>
     <ul className='unorderedlist'>
        <li ><Link to='/' className='a'>Home</Link></li>
        <li><Link to='/Services' className='a'>Services</Link></li>
      </ul>
    </div>
    </Container>
    </section>
    <section className="py-5">
        <Container>
          <Row className="pt-4">
            <Col lg={3} className="mb-4" data-aos="fade-right" data-aos-duration="3000" >
              <div className="zoom-text">
              <Link to="/Services/:id" className="link">
                  <Image src={imgGrid} className="zoom-image" />
                  <h5 className="text-center">MEDOW HONEY</h5>

                </Link>

              </div>
            </Col>
            <Col lg={3} className="mb-4" data-aos="fade-right" data-aos-duration="3000" >
              <div className="zoom-text">
              <Link to="/Services/:id" className="link">
                  <Image src={imgGrid1} className="zoom-image" />
                  <h5 className="text-center">YELLOW FRESH HONEY</h5>

                </Link>

              </div>
            </Col>
            <Col lg={3} className="mb-4" data-aos="fade-right" data-aos-duration="3000" >
              <div className="zoom-text">
              <Link to="/Services/:id" className="link">
                  <Image src={imgGrid2} className="zoom-image" />
                  <h5 className="text-center">YELLOW FRESH HONEY</h5>

                </Link>

              </div>
            </Col>
            <Col lg={3} className="mb-4" data-aos="fade-right" data-aos-duration="3000" >
              <div className="zoom-text">
              <Link to="/Services/:id" className="link">
                  <Image src={imgGrid3} className="zoom-image" />
                  <h5 className="text-center">YELLOW FRESH HONEY</h5>

                </Link>

              </div>
            </Col>
            <Col lg={3} className="mb-4" data-aos="fade-right" data-aos-duration="3000" >
              <div className="zoom-text">
              <Link to="/Services/:id" className="link">
                  <Image src={imgGrid4} className="zoom-image" />
                  <h5 className="text-center">MEDOW HONEY</h5>

                </Link>

              </div>
            </Col>
            <Col lg={3} className="mb-4" data-aos="fade-right" data-aos-duration="3000" >
              <div className="zoom-text">
              <Link to="/Services/:id" className="link">
                  <Image src={imgGrid5} className="zoom-image" />
                  <h5 className="text-center">YELLOW FRESH HONEY</h5>

                </Link>
              </div>
            </Col>
            <Col lg={3} className="mb-4" data-aos="fade-right" data-aos-duration="3000" >
              <div className="zoom-text">
              <Link to="/Services/:id" className="link">
                  <Image src={imgGrid} className="zoom-image" />
                  <h5 className="text-center">YELLOW FRESH HONEY</h5>
                </Link>
              </div>
            </Col>
            <Col lg={3} className="mb-4" data-aos="fade-right" data-aos-duration="3000" >
              <div className="zoom-text">
                <Link to="/Services/:id" className="link">
                  <Image src={imgGrid1} className="zoom-image" />
                  <h5 className="text-center">YELLOW FRESH HONEY</h5>

                </Link>
              </div>
            </Col>
            <Col lg={12} className="justify-content-center mt-4 mb-4" data-aos="fade-up" data-aos-duration="3000" >
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
        <FooterComponent/>
      </section>
        </div>
    )
}
export default Services
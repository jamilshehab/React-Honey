import React from 'react';
import logo from '../images/logo/logo.svg'
import { Container,Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faTwitter,faWhatsapp,faLinkedinIn,faInstagram } from '@fortawesome/free-brands-svg-icons';
 export default function FooterComponent(){
 return (
  <footer className="text-center text-lg-start text-muted" style={{backgroundColor:'#f2e2d1'}}>
    <div className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"  style={{backgroundColor:'#f2e2d1'}}></div>
    <section className="">
    <Container className="text-center text-md-start mt-5">
    <Row className='mt-3'>
        <Col lg={3} className='mx-auto mb-4'>
          <Link to='/'><img src={logo} width={130} height={130}/></Link>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </Col>
<Col lg={3}  className='mx-auto mb-4'>
<h6 className="text-uppercase fw-bold mb-4">
            UseFul Links 
          </h6>
          <p>
            <Link to="/" className="text-reset useful-link">Home</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset useful-link">About</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset useful-link">Services</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset useful-link">Shop</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset useful-link">Contact</Link>
          </p>
</Col>
<Col lg={3}>
<h6 className="text-uppercase fw-bold mb-4">
Follow Us On </h6>
      <Link to="" className="me-4 text-reset social-icon">
        <FontAwesomeIcon icon={faFacebookF}/>
      </Link>
      <Link to="" className="me-4 text-reset social-icon">
        <FontAwesomeIcon icon={faTwitter}/>
      </Link>
      
      <Link to="" className="me-4 text-reset social-icon">
        <FontAwesomeIcon icon={faWhatsapp}/>
      </Link>
      <Link to="" className="me-4 text-reset social-icon">
        <FontAwesomeIcon icon={faLinkedinIn} /> 
      </Link>
      <Link to="" className="me-4 text-reset social-icon">
      <FontAwesomeIcon icon={faInstagram}/>
      </Link>
     
</Col>
    </Row>
 </Container>
  </section>
 
   <div className="text-center p-4 "  style={{backgroundColor:'#f2e2d1'}}>
   © 2021 Copyright Developed By <Link className="text-reset fw-bold useful-link" to="#">Jamil</Link>
  </div>
 </footer>
 )
}
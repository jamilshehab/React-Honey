import React from "react";
import { Link } from "react-router-dom";
import { Container,Form,FormGroup,Row,Col,FormLabel,FormControl,Button } from "react-bootstrap";
import FooterComponent from "../Components/Footer";

 function Contact(){
    return (
        <div>
 <section className='img-banner'>
    <Container>
   <div className='banner-caption'>
    <h1 className='h1 text-center'>Contact Us</h1>
    <ul className='unorderedlist'>
       <li ><Link to='/' className='a'>Home</Link></li>
       <li><Link to='/Contact' className='a'>Contact</Link></li>
     </ul>
   </div>
   </Container>
   </section>
   <section className="py-5">
    <Container>

    <Form>
        <Row className="justify-content-center">
    <Col lg={6} data-aos="fade-left" data-aos-duration="3000">
    <FormGroup className="mb-4">
         <FormLabel>Name</FormLabel> 
        <FormControl type="text" className="contact-form" placeholder="Enter your First Name" />
      </FormGroup>
    </Col>
    <Col lg={6} data-aos="fade-right" data-aos-duration="3000">
    <FormGroup className="mb-4">
         <FormLabel>Name</FormLabel> 
        <FormControl type="text" className="contact-form" placeholder="Enter your last Name" />
      </FormGroup>
    </Col>
    <Col lg={6} data-aos="fade-left" data-aos-duration="3000">
    <FormGroup className="mb-4">   
        <FormLabel>Email</FormLabel>  
        <FormControl type="email" className="contact-form"placeholder="Enter your email" />
      </FormGroup>
    </Col>
    <Col lg={6} data-aos="fade-right" data-aos-duration="3000">
    <FormGroup className="mb-4">
         <FormLabel>Phone Number</FormLabel> 
        <FormControl type="text" className="contact-form" placeholder="+961 993045" />
      </FormGroup>
    </Col>
    <Col lg={12} data-aos="fade-left" data-aos-duration="3000">
    <FormGroup className="mb-4" >   
        <FormLabel>Subject</FormLabel>  
        <FormControl type="subject" className="contact-form"placeholder="Enter the Subject" />
      </FormGroup>
    </Col>
    <Col lg={12} data-aos="fade-right" data-aos-duration="3000">
    <FormGroup className="mb-4">
        <FormLabel>Message</FormLabel> 
        <FormControl as="textarea"  rows="4" className="text-form"  placeholder="Enter your message" />
      </FormGroup>
    </Col>
        </Row>
        <Button type="submit" className="btn-submit" data-aos="fade-in" data-aos-duration="3000">Send</Button>

    </Form> 
    </Container>
   </section>
   <FooterComponent/>
        </div>
    )
 }
 export default Contact
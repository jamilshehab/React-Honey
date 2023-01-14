import React from 'react'
import { Link } from 'react-router-dom';
import aboutImg from '../images/banner-image/about-1.png';
import Header from '../Components/Header';
import { Container,Image,Row,Col } from 'react-bootstrap';
import Slider from '../Components/Slider';
import FooterComponent from '../Components/Footer';
function About(){
return( 
<div>
<Header/>
<section className='img-banner'>
    <Container>
<div className='banner-caption'>
    <h1 className='h1 text-center'>About Us </h1>
    <ul className='unorderedlist'>
        <li ><Link to='/' className='a'>Home</Link></li>
        <li><Link to='/' className='a'>About</Link></li>
    </ul>
    </div>
    </Container>
</section>
<section className='py-5'>
<Container>
    <Row>
     <Col lg={6} data-aos="fade-left" data-aos-duration="3000"><Image src={aboutImg} className='img-fluid'/></Col>
     <Col lg={6} style={{paddingTop:70}} data-aos="fade-right" data-aos-duration="3000">
      <p className='typo-tagline-text'>About Us</p>
      <h2 className='typo-title-text'>years of since we provide honey successfully</h2>
      <p className='paragraph'>Sed ut perspiciatis unde omnis iste natus volup tatem accusantium doloremque laudantium, totam reperiam, eaque ipsa quae ab illo inventore veritatis et qrchitecto beatae vitae dicta sunt explicabo.
      Sed ut perspiciatis unde omnis iste natus volup tatem accusantium doloremque laudantium, totam reperiam, eaque ipsa quae ab illo inventore veritatis et qrchitecto beatae vitae dicta sunt explicabo.
      </p>
    
     </Col>
    </Row>
  </Container>
</section>
<Container className='mt-4 mb-4'>
<Slider/>
</Container>
<FooterComponent/>
</div>
);
}
export default About
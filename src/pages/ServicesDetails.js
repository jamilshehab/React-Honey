import React from 'react'
import serviceImg from '../images/grid/h5.jpg';
import { Link } from 'react-router-dom';
import { Container,Row,Col,Image } from 'react-bootstrap'
import FooterComponent from '../Components/Footer';
import Slider from '../Components/Slider';
function ServicesDetails() {
  return (
    <div>
    <section className='img-banner'>
     <Container>
    <div className='banner-caption'>
     <h1 className='h1 text-center'>Services Details</h1>
     <ul className='unorderedlist'>
        <li ><Link to='/' className='a'>Home</Link></li>
        <li><Link to='/Services' className='a'>Services</Link></li>
        <li><Link to='/Services/:id' className='a'>Services Details</Link></li>

      </ul>
    </div>
    </Container>
    </section>
      <section className='py-5' >
  <Container  >
    <Row>
     <Col lg={4}><Image src={serviceImg}  data-aos="fade-right" data-aos-duration="3000" className='img-fluid zoom-image-1'/></Col>
     <Col lg={8} data-aos="fade-left" data-aos-duration="3000">
      <p className='typo-tagline-text'  data-aos="fade-left" data-aos-duration="3000">More Details </p>
      <h2 className='typo-title-text'  data-aos="fade-left" data-aos-duration="3000">years of since we provide honey successfully</h2>
      <p className='paragraph'  data-aos="fade-left" data-aos-duration="3000">Sed ut perspiciatis unde omnis iste natus volup tatem accusantium doloremque laudantium, totam reperiam, eaque ipsa quae ab illo inventore veritatis et qrchitecto beatae vitae dicta sunt explicabo.
      Sed ut perspiciatis unde omnis iste natus volup tatem accusantium doloremque laudantium, totam reperiam, eaque ipsa quae ab illo inventore veritatis et qrchitecto beatae vitae dicta sunt explicabo.
      </p>
      </Col>
    </Row>
    <Slider/>
  </Container>
  </section>
  <FooterComponent/>
    </div>
  )
}

export default ServicesDetails

import React from 'react'
import { Link } from 'react-router-dom'
import img from '../images/banner/banner-1.png'
import img2 from '../images/banner/banner-2.png'
import imgBanner from '../images/banner-image/hanta-hero.png'
import aboutImg from '../images/banner-image/about-1.png'
import imgGrid from '../images/grid/flower.png'
import imgGrid1 from '../images/grid/organichoney.png'
import imgGrid2 from '../images/grid/jar.png'
import imgGrid3 from '../images/grid/h1.jpg'
import imgGrid4 from '../images/grid/h2.jpg'
import imgGrid5 from '../images/grid/h3.jpg'
import imgGrid6 from '../images/grid/h4.jpg'
import { Container,Carousel,Image,Row,Col, Card } from 'react-bootstrap'
import IsotopeMaysonary from '../Components/Isotope'
 import Slider from '../Components/Slider' 
import FooterComponent from '../Components/Footer'
  function Home(){
    return (
      <div>
  <Carousel>
    <Carousel.Item>
      <img src={img} className='d-block' />
      <Container>
      <Carousel.Caption>
        <Container>
        <div className="hero-content" >
                    <div className="text-content">
                      <h1 className="main-title">Welcome To Honey Website</h1>
                      <div className="main-desc">
                        Our new patties are made with 100% beef with no fillers, no preservatives, no additives, no
                        nonsense.
                      </div>
                      <div className="actions">
                      <Link to='/Shop' className="btn btn-main">Shop Now</Link>
                      <Link to='/About' className="btn btn-main">Learn More</Link>
                      </div>
                    </div>
                    
        </div>
        </Container>
      </Carousel.Caption>
      </Container>   
    </Carousel.Item>
    <Carousel.Item>
      <Image src={img2} className='d-block'/>
      <Carousel.Caption className='text-caption' >
        <Container>
        <div className="hero-content" >
                    <div className="text-content">
                      <h1 className="main-title">We Released Our New Monster!</h1>
                      <div className="main-desc">
                        Our new patties are made with 100% beef with no fillers, no preservatives, no additives, no
                        nonsense.
                      </div>
                      <div className="actions">
                        <Link to='/Shop' className="btn btn-main">Shop Now</Link>
                        <Link to='/About' className="btn btn-main">Learn More</Link>

                      </div>
                    </div>
                    
        </div>
        </Container>
      </Carousel.Caption>
      </Carousel.Item>
  </Carousel>
  {/*Display A Card Layout*/}
  <section className='services py-5 '>
  <div className='section-card'></div>
  <Container>
  <p className='element-header-main' data-aos="fade-up" data-aos-duration="3000">Who We Are</p>   
        <h2 className='element-header' data-aos="fade-up" data-aos-duration="3000">BEST FEATURES</h2>
    <Row className='justify-content-center'>
        <Col md={4} lg={4} sm={12} xs={12} data-aos="fade-right" data-aos-duration="3000" className='mb-3 justify-content-center align-items-center'><Image src={imgGrid} className='img-fluid myimg mx-auto d-block  zoom-image-1'  />
        <h5 className='text-center'>NATURAL HONEY</h5>
        <p className='text-center mb-2'>The use of natural honey as a nutraceutical agent is associated with nutritional benefits and therapeutic promises.</p>
        </Col>
        <Col md={4} lg={4} data-aos="fade-right" data-aos-duration="3000" className='mb-3 justify-content-center align-items-center'><Image src={imgGrid1} className='img-fluid myimg mx-auto d-block  zoom-image-1'  />
        <h5 className='text-center'>ORGANIC HONEY</h5>
        <p className='text-center'>Organic honey is produced from the pollen of organically grown plants, and without chemical miticides to treat the bees.</p>
        </Col>
        <Col md={4} lg={4} data-aos="fade-right" data-aos-duration="3000" className='mb-3  justify-content-center align-items-center '> <Image src={imgGrid2} className='img-fluid myimg mx-auto d-block  zoom-image-1' />
        <h5 className='text-center'>BIOGRAPHY SAFETY</h5>
        <p className='text-center'>Honey is likely safe for use as a natural sweetener, cough suppressant, and topical product for minor sores and wounds.</p>
         </Col> 
    </Row>
  </Container>
  </section>
  {/*End Display Card  Section*/}
  {/*About Section*/}
  <section className='py-5' >
  <Container  >
    <Row>
     <Col lg={6}><Image src={aboutImg}  data-aos="fade-right" data-aos-duration="3000" className='img-fluid zoom-image-1'/></Col>
     <Col lg={6} data-aos="fade-right" data-aos-duration="3000">
      <p className='typo-tagline-text'  data-aos="fade-left" data-aos-duration="3000">About Us</p>
      <h2 className='typo-title-text'  data-aos="fade-left" data-aos-duration="3000">years of since we provide honey successfully</h2>
      <p className='paragraph'  data-aos="fade-left" data-aos-duration="3000">Sed ut perspiciatis unde omnis iste natus volup tatem accusantium doloremque laudantium, totam reperiam, eaque ipsa quae ab illo inventore veritatis et qrchitecto beatae vitae dicta sunt explicabo.
      Sed ut perspiciatis unde omnis iste natus volup tatem accusantium doloremque laudantium, totam reperiam, eaque ipsa quae ab illo inventore veritatis et qrchitecto beatae vitae dicta sunt explicabo.
      </p>
      <Link to='/About' className='btn btn-main' >Learn More</Link>
     </Col>
    </Row>
  </Container>
  </section>
{/*End Display About Section*/}
{/*Shop Section*/}
 <section className='shop-section py-5'>
 <div className='pattern-layer'></div>
 <div className='my-container'>
  <Container>
    <p className='element-header-main'data-aos="fade-up" data-aos-duration="3000">Visit Our Store</p>
    <h2 className='typo-title-text text-center'data-aos="fade-up" data-aos-duration="3000">Popular Products</h2>

    <h2></h2>
    <Row className='pt-4'>
    <Col lg={3} className="mb-4"  data-aos="fade-right" data-aos-duration="3000">
              <div className="zoom-text">
              <Link to="/Services/:id" className="link">
                  <Image src={imgGrid3} className="zoom-image" />
                  <h5 className="text-center">ORGANIC HONEY</h5>
                </Link>
              </div>
            </Col>
      <Col lg={3} className="mb-4"  data-aos="fade-right" data-aos-duration="3000">
              <div className="zoom-text">
              <Link to="/Services/:id" className="link">
                  <Image src={imgGrid4} className="zoom-image" />
                  <h5 className="text-center">YELLOW FRESH HONEY</h5>
                </Link>
              </div>
            </Col>
      <Col lg={3} className="mb-4" data-aos="fade-right" data-aos-duration="3000">
              <div className="zoom-text">
              <Link to="/Services/:id" className="link">
                  <Image src={imgGrid5} className="zoom-image" />
                  <h5 className="text-center"> FRESH HONEY</h5>
                </Link>
              </div>
            </Col>
            <Col lg={3} className="mb-4" data-aos="fade-right" data-aos-duration="3000">
              <div className="zoom-text">
              <Link to="/Services/:id" className="link">
                  <Image src={imgGrid6} className="zoom-image" />
                  <h5 className="text-center">NATURAL HONEY</h5>
                </Link>
              </div>
            </Col>
     </Row>
     <Link className='btn btn-main ' to='/Shop' data-aos="fade-up" data-aos-duration="3000">View All Products</Link>
  </Container>
  </div>
 </section>
{/*End Shop Section*/}
{/*Start Services Section*/}
<section className='py-5' data-aos="fade-up" data-aos-duration="3000">
  <Container>
    <div className='isotope-container text-center justify-content-center'>
      <IsotopeMaysonary/>
   </div>
  </Container>
</section>
{/*Our Clients Section Starts*/}
<section className='py-5 ' data-aos="fade-up" data-aos-duration="3000">
 <Container>
  <div className='slider-regular justify-content-center'>
  <h2 className='typo-title-text text-center mb-5'>Our Clients</h2>
   <Slider/>
   </div>
    </Container> 
</section>
{/*Our Clients Section Ends */}
<FooterComponent/>
       </div>
    )
}
export default Home
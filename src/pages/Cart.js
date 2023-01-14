import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
 import { Link } from "react-router-dom";
import  img from "../images/grid/14.jpg";
import  img2  from "../images/grid/15.jpg";
import  img1  from "../images/grid/13.jpg";
function Cart() {
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
              My Cart
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
                <Link to="/Cart" className="a">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </section>
      <section className="py-5">
        <Container>
          <Row>
            <Col md={8}>
              <Card className="cart">
                <Card.Body>
                  <Card.Title>
                    <Row>
                      <Col>
                        <h4>
                          <b>Shopping Cart</b>
                        </h4>
                      </Col>
                    </Row>
                  </Card.Title>
                  <Row className="border-top border-bottom">
                    <Row className="main align-items-center">
                      <Col md={2}>
                        <img
                          className="img-fluid"
                          src={img2}
                          alt=""
                        />
                      </Col>
                      <Col>
                        <Row className="text-muted">Honey</Row>
                        <Row>Pure Honey</Row>
                      </Col>

                      <Col>
                        &euro; 40.00 <span className="close ">&#10005;</span>
                      </Col>
                    </Row>
                    <Row className="main align-items-center">
                      <Col md={2}>
                        <img
                          className="img-fluid"
                          src={img}
                          alt=""
                        />
                      </Col>
                      <Col>
                        <Row className="text-muted">Honey</Row>
                        <Row>Pure Honey</Row>
                      </Col>

                      <Col>
                        &euro; 44.00 <span className="close ">&#10005;</span>
                      </Col>
                    </Row>
                    <Row className="main align-items-center">
                      <Col md={2}>
                        <img
                          className="img-fluid"
                          src={img1}
                          alt=""
                        />
                      </Col>
                      <Col>
                        <Row className="text-muted">Honey</Row>
                        <Row>Pure Honey</Row>
                      </Col>

                      <Col>
                        &euro; 30.00 <span className="close ">&#10005;</span>
                      </Col>
                    </Row>
                  </Row>
                  {/* ... same code for the other items ... */}
                
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="summary">
                <Card.Body>
                  <Card.Title>
                    <h5>
                      <b>Summary</b>
                    </h5>
                  </Card.Title>
                  <hr />
                  <Row>
                    <Col style={{ paddingLeft: 0 }}>ITEMS 3</Col>
                    <Col className="text-right">&euro; 132.00</Col>
                  </Row>
                  <Form>
                    <Form.Group>
                      <Form.Label>SHIPPING</Form.Label>
                      <Form.Control as="select" className="text-muted">
                        <option>Standard-Delivery- &euro;5.00</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>GIVE CODE</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your code"
                        id="code"
                      />
                    </Form.Group>
                  </Form>
                  <Row
                    style={{
                      borderTop: "1px solid rgba(0,0,0,.1)",
                      padding: "2vh 0",
                    }}
                  >
                    <Col>TOTAL PRICE</Col>
                    <Col className="text-right">&euro; 137.00</Col>
                  </Row>
                  <Button className="btn-main block">CHECKOUT</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Cart;

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} xs={12}>
            <form>
              <div className="form-inner">
                <header>
                  <h2>Contact Us</h2>
                  <i className="fa-solid fa-robot"></i>
                </header>
                <Row className="form-group">
                  <Col className="group-item" xs={11}>
                    <i className="fa-solid fa-user"></i>
                    <input type="text" name="name" id="name" required="required" />
                    <span>Name</span>
                  </Col>

                  <Col className="group-item" xs={11}>
                    <i className="fa-solid fa-envelope"></i>
                    <input type="mail" name="mail" id="mail" required="required" />
                    <span>Email</span>
                  </Col>

                  <Col className="group-item" xs={11}>
                    <i className="fa-solid fa-phone"></i>
                    <input type="text" name="number" id="number" required="required" />
                    <span>Phone Number</span>
                  </Col>

                  <Col className="group-item" xs={11}>
                    <textarea name="message" id="message" required="required" />
                    <span>Message</span>
                  </Col>
                </Row>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;

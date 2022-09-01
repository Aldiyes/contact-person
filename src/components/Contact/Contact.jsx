import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
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
                    <input type="text" name="name" id="name" required="required" value={name} onChange={(e) => setName(e.target.value)} />
                    <span className="text name">Name</span>
                  </Col>

                  <Col className="group-item" xs={11}>
                    <i className="fa-solid fa-envelope"></i>
                    <input type="mail" name="mail" id="mail" required="required" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <span className="text email">Email</span>
                  </Col>

                  <Col className="group-item" xs={11}>
                    <i className="fa-solid fa-phone"></i>
                    <input type="text" name="number" id="number" required="required" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <span className="text phone-number">Phone Number</span>
                  </Col>

                  <Col className="group-item" xs={11}>
                    <textarea name="message" id="message" required="required" value={message} onChange={(e) => setMessage(e.target.value)} />
                    <span className="text message">Message</span>
                  </Col>
                </Row>
                <input type="submit" value="SUBMIT" />
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;

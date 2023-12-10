import React, { useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "../../content_option";
import Header from "./../../components/common/header";
import "../../Styles/CustomerFeedback.css";
import Footer from "./../../components/common/footer";
import { UserInfoContext } from "../../App";

export default function Customerfeedback() {
  const userInfo = useContext(UserInfoContext);

  const [feedback, setFeedback] = useState({
    name: "",
    subject: "",
    email: "",
    text: "",
  });

  //handle feedback inputs
  const handleFeedbackInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userInfo.userType === "client") {
      const { name, subject, email, text } = feedback;

      try {
        var res = await fetch("/customerfeedback", {
          method: "POST",
          cache: "no-cache",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            subject,
            email,
            text,
          }),
        });
        res = await res.json();

        if (res.error) {
          window.alert(res.error);
        } else {
          window.alert(res.message); // successful
          window.location.href = "http://localhost:3000/customerfeedback";
        }
      } catch (err) {
        console.log(err);
      }
    } else if (userInfo.userType === "coach") {
      window.alert("User must be Client to send the feedback");
    } else {
      window.alert("You haven't Logged In to your account");
    }
  };

  return (
    <div className="">
      <Header />
      <Container>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Your Feedback Matters!</h1>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:email@email.com</strong>
              <br />
              <br />
              <p>
                <strong>Phone : +65 XXX XXX</strong>
              </p>
            </address>
            <p>{contactConfig.description}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form
              className="contact_form w-100"
              method="POST"
              action="/feedback"
              onSubmit={handleSubmit}
            >
              <Row>
                <Col lg="12" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    value={feedback.name}
                    onChange={handleFeedbackInput}
                    required
                  />
                </Col>
                <span />
                <Col lg="12" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    type="subject"
                    value={feedback.subject}
                    onChange={handleFeedbackInput}
                    required
                  />
                </Col>
                <span />

                <Col lg="12" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={userInfo.email}
                    onChange={handleFeedbackInput}
                    required
                  />
                </Col>
                <span />

                <Col>
                  <textarea
                    className="form-control rounded-0"
                    id="text"
                    name="text"
                    placeholder="Text"
                    rows="5"
                    value={feedback.text}
                    onChange={handleFeedbackInput}
                    required
                  ></textarea>
                </Col>
              </Row>

              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit">
                    Send
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

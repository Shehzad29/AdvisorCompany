import emailjs from "emailjs-com";
import React, { useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Styles } from "../../Styles/form";
import { UserInfoContext } from "../../App";

function BookingForm() {
  function autoGenerate(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h5w75xr",
        "template_db89agl",
        e.target,
        "-nyfvjhte5xE2une8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    window.alert("Thanks for Booking your Coach");
  }
  let data = {
    secTitle: "Book your Coach Today",
  };

  const userInfo = useContext(UserInfoContext);

  useEffect(() => {
    const form = document.getElementById("form2");
    const name = document.getElementById("name2");
    const email = document.getElementById("email2");

    form.addEventListener("submit", formSubmit);

    function formSubmit(e) {
      e.preventDefault();

      if (userInfo.userType === "client"){
        const nameValue = name.value.trim();
        const emailValue = email.value.trim();

        if (nameValue === "") {
          setError(name, "Name can't be blank");
        } else {
          setSuccess(name);
        }

        if (emailValue === "") {
          setError(email, "Email can't be blank");
        } else if (!isEmail(emailValue)) {
          setError(email, "Not a valid email");
        } else {
          setSuccess(email);
        }
      } else if (userInfo.userType === "coach"){
        window.alert(
          "User must be Client to book an appointment with any coach"
        );
      } else {
        window.alert(
          "You haven't Logged In to your account"
        );
      }
     
    }

    function setError(input, message) {
      const formControl = input.parentElement;
      const errorMsg = formControl.querySelector(".input-msg2");
      formControl.className = "form-control error";
      errorMsg.innerText = message;
    }

    function setSuccess(input) {
      const formControl = input.parentElement;
      formControl.className = "form-control success";
      window.location.href = "http://localhost:3000/checkout";
    }

    function isEmail(email) {
      return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    }
  });

  return (
    <Styles>
      {/* Newsletter Form */}
      <section className="newsletter-form-area">
        <Container>
          <Row>
            <Col md="12">
              <div className="newsletter-container">
                <div className="newsletter-box">
                  <div className="sec-title text-center">
                    <h4>{data.secTitle}</h4>
                  </div>
                  <form onSubmit={autoGenerate} id="form2" className="form">
                    <Row>
                      <Col md="14">
                        <p className="form-control">
                          <input
                            required
                            type="text"
                            placeholder="Enter your Name"
                            id="name2"
                            name="from_name"
                            defaultValue={userInfo.username}
                          />
                          <span className="input-msg2"></span>
                        </p>
                      </Col>
                      <Col md="14">
                        <p className="form-control">
                          <input
                            required
                            type="email"
                            placeholder="Enter your Email"
                            id="email2"
                            name="email"
                            defaultValue={userInfo.email}
                          />
                          <span className="input-msg2"></span>
                        </p>
                      </Col>
                      <Col md="14">
                        <p className="form-control">
                          <select name="coach">
                            <option>Shawn Smith</option>
                            <option>Yennefer Parker</option>
                            <option>David Beckham</option>
                            <option>Rachel Zane</option>
                            <option>Sam Yung</option>
                            <option>Tiana Levinson</option>
                            <option>Ely Parker</option>
                            <option>Joslyn Rem</option>
                            <option>Jinnat Watson</option>
                            <option>Alister Cook</option>
                            <option>Sam Perrey</option>
                            <option>Katerin White</option>
                          </select>
                        </p>
                      </Col>
                      <Col md="14">
                        <p className="form-control">
                          <input
                            required
                            type="date"
                            placeholder="Enter your date"
                            id="date"
                            name="date"
                          />
                          <span className="input-msg2"></span>
                        </p>
                      </Col>
                      <Col md="14">
                        <p className="form-control">
                          <input
                            required
                            type="time"
                            placeholder="Enter your time"
                            id="time"
                            name="time"
                          />
                          <span className="input-msg2"></span>
                        </p>
                      </Col>
                      <Col md="14">
                        <button type="submit">
                          <i></i>Book Now
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Styles>
  );
}

export default BookingForm;

import emailjs from "emailjs-com"
import React, { useEffect, useContext } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "../../Styles/footer";
import { UserInfoContext } from "../../App";

function NewsletterForm() {
    function autoGenerate(e){
        e.preventDefault();

    emailjs.sendForm('service_4s452m4', 'template_cknud6n', e.target, 'Bkc6ncvd78PLsvl9y')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      window.alert("Thanks for Subscribing")
    }
    let data = {
        secTitle: 'Get The Latest News & Updates On Your Box',
    }
    const userInfo = useContext(UserInfoContext);

    useEffect(() => {
        const form = document.getElementById("form2");
        const name = document.getElementById("name2");
        const email = document.getElementById("email2");

        form.addEventListener("submit", formSubmit);

        function formSubmit(e) {
            e.preventDefault();

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
                                            <Col md="4">
                                                <p className="form-control">
                                                    <input required type="text" placeholder="Enter your Name" id="name2" defaultValue={userInfo.firstname} name="from_name"/>
                                                    <span className="input-msg2"></span>
                                                </p>
                                            </Col>
                                            <Col md="4">
                                                <p className="form-control">
                                                    <input required type="email" placeholder="Enter your Email" defaultValue={userInfo.email} id="email2" name="email"/>
                                                    <span className="input-msg2"></span>
                                                </p>
                                            </Col>
                                            <Col md="4">
                                                <button type="submit"><i className="las la-envelope"></i>Subscribe Now</button>
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

export default NewsletterForm

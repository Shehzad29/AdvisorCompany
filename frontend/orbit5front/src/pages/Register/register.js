import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/common/header";
import { Styles } from "../../Styles/account";
// import { useHistory } from 'react-router';

const Register = () => {
  // const history = useHistory();

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    phonenumber: "",
    userType: "client",
  });

  //handle register inputs
  const handleRegisterInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  //handle register button
  const handleRegister = async (e) => {
    e.preventDefault();

    // it will store object data into variables, it's called object destructuring
    const {
      firstname,
      lastname,
      email,
      username,
      password,
      phonenumber,
      userType,
    } = user;
    try {
      // This form will be submitted to port 3000 by default (frontend)
      //but we need proxy to send that data to our backend server which is running on port 4000
      var res = await fetch("/register", {
        method: "POST",
        cache: "no-cache",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          username,
          password,
          phonenumber,
          userType,
        }),
      });
      res = await res.json();

      if (res.error) {
        window.alert(res.error);
      } else {
        window.alert(res.message); // successful
        window.location.href = "http://localhost:3000/login";
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Styles>
      {/* Main Wrapper */}
      <div className="main-wrapper registration-page">
        {/* Header */}
        <Header />

        {/* Registration Area */}
        <section className="registration-area">
          <Container>
            <Row>
              <Col md="12">
                <div className="registration-box">
                  <div className="registration-title text-center">
                    <h3>Registration</h3>
                  </div>
                  <form
                    id="form_registration"
                    className="form"
                    onSubmit={handleRegister}
                    method="POST"
                  >
                    <p className="form-control">
                      <label htmlFor="registration_fname">First Name</label>
                      <input
                        type="text"
                        placeholder="First name"
                        id="registration_fname"
                        name="firstname"
                        value={user.firstname}
                        onChange={handleRegisterInput}
                        required
                      />
                      <span className="registration_input-msg"></span>
                    </p>
                    <p className="form-control">
                      <label htmlFor="registration_lname">Last Name</label>
                      <input
                        type="text"
                        placeholder="Last name"
                        id="registration_lname"
                        name="lastname"
                        value={user.lastname}
                        onChange={handleRegisterInput}
                        required
                      />
                      <span className="registration_input-msg"></span>
                    </p>
                    <p className="form-control">
                      <label htmlFor="registration_email">Email Address</label>
                      <input
                        type="email"
                        placeholder="Email address"
                        id="registration_email"
                        name="email"
                        value={user.email}
                        onChange={handleRegisterInput}
                        required
                      />
                      <span className="registration_input-msg"></span>
                    </p>
                    <p className="form-control">
                      <label htmlFor="registration_user">User Name</label>
                      <input
                        type="text"
                        placeholder="Username"
                        id="registration_user"
                        name="username"
                        value={user.username}
                        onChange={handleRegisterInput}
                        required
                      />
                      <span className="registration_input-msg"></span>
                    </p>
                    <p className="form-control">
                      <label htmlFor="registration_password">Password</label>
                      <input
                        type="password"
                        placeholder="*******"
                        id="registration_password"
                        name="password"
                        value={user.password}
                        onChange={handleRegisterInput}
                        required
                      />
                      <span className="registration_input-msg"></span>
                    </p>
                    {/* <p className="form-control">
                                            <label htmlFor="registration_cpassword">Confirm Password</label>
                                            <input type="password" placeholder="Confirm password" id="registration_cpassword" 
                                                name="cpassword" value={user.cpassword} onChange={handleRegisterInput}/>
                                            <span className="registration_input-msg"></span>
                                        </p> */}
                    <div>
                      <p className="form-control">
                        <label htmlFor="registration_type">
                          Please select User Type:
                        </label>
                      </p>
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      <input
                        type="radio"
                        id="client"
                        name="userType"
                        checked={user.userType === "client" ? true : false}
                        value="client"
                        onChange={handleRegisterInput}
                      />
                      &nbsp;
                      <label for="client">Client</label>
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      <input
                        type="radio"
                        id="coach"
                        name="userType"
                        value="coach"
                        checked={user.userType === "coach" ? true : false}
                        onChange={handleRegisterInput}
                      />
                      &nbsp;
                      <label for="coach">Coach</label>
                    </div>
                    <br />
                    <p className="form-control">
                      <label htmlFor="registration_phonenumber">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        /*pattern="{[0-9]{3}-[0-9]{2}-[0-9]{3}}"*/ placeholder="Contact Number"
                        id="registration_phonenumber"
                        name="phonenumber"
                        value={user.phonenumber}
                        onChange={handleRegisterInput}
                        required
                      />
                      <span className="registration_input-msg"></span>
                    </p>
                    <button>Register Now</button>
                  </form>
                  <div className="have_account-btn text-center">
                    <p>
                      Already have an account?{" "}
                      <Link to="/login">Login Here</Link>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Footer */}
      </div>
    </Styles>
  );
};

export default Register;

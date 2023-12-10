import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/common/header";
import { Styles } from "../../Styles/account";
// import { useHistory } from 'react-router';

const Login = () => {
  // const history = useHistory();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  //handle login inputs
  const handleLoginInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  //handle login button
  const handleLogin = async (e) => {
    e.preventDefault();

    // it will store object data into variables, it's called object destructuring
    const { username, password } = user;
    try {
      // This form will be submitted to port 3000 by default (frontend)
      //but we need proxy to send that data to our backend server which is running on port 4000
      let res = await fetch("/login", {
        method: "POST",
        cache: "no-cache",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      res = await res.json();

      if (res.error) {
        window.alert(res.error);
      } else {
        // window.alert(res.message); // successful
        window.alert("User Logged In Successfully"); // successful
        localStorage.setItem("token", res.token);
        // console.log(res)
        window.location.href = "http://localhost:3000/home";
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Styles>
      {/* Main Wrapper */}
      <div className="main-wrapper login-page">
        {/* Header */}
        <Header />

        {/* Login Area */}
        <section className="login-area">
          <Container>
            <Row>
              <Col md="12">
                <div className="login-box">
                  <div className="login-title text-center">
                    <h3>Log In</h3>
                  </div>
                  <form
                    id="form_login"
                    className="form"
                    onSubmit={handleLogin}
                    method="POST"
                  >
                    <p className="form-control">
                      <label htmlFor="login_user">User Name</label>
                      <input
                        type="text"
                        placeholder="Username"
                        id="login_user"
                        name="username"
                        value={user.username}
                        onChange={handleLoginInput}
                        required
                      />
                      <span className="login_input-msg"></span>
                    </p>
                    <p className="form-control">
                      <label htmlFor="login_password">Password</label>
                      <input
                        type="password"
                        placeholder="*******"
                        id="login_password"
                        name="password"
                        value={user.password}
                        onChange={handleLoginInput}
                        required
                      />
                      <span className="login_input-msg"></span>
                    </p>
                    <button>Log In</button>
                    <div className="save-forget-password d-flex justify-content-between">
                      <div className="save-passowrd">
                        <label htmlFor="save_password">
                          <input
                            type="checkbox"
                            id="save_password"
                            className="check-box"
                          />
                          Save Password
                        </label>
                      </div>
                      <div className="forget-password">
                        <Link to={process.env.PUBLIC_URL + "/"}>
                          Forget Password?
                        </Link>
                      </div>
                    </div>
                    <div className="not_account-btn text-center">
                      <p>
                        Haven't Any Account Yet?{" "}
                        <Link to={process.env.PUBLIC_URL + "/register"}>
                          Click Here
                        </Link>
                      </p>
                    </div>
                  </form>
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

export default Login;

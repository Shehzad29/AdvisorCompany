import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/common/header";
import { Styles } from "../../Styles/account";
// import { useHistory } from 'react-router';

const Logout = () => {
  // const history = useHistory();

  const [state, setState] = useState(() => {
    if (localStorage.getItem("token")) {
      localStorage.setItem("token", "");
      window.alert("User Logged Out Successfully"); // successful
      window.location.href = "http://localhost:3000/home";
    }
  });

  return (
    <Styles>
      {/* Main Wrapper */}
      <div className="main-wrapper login-page">
        {/* Header */}
        <Header />

        <h2>Waiting....</h2>

        {/* Footer */}
      </div>
    </Styles>
  );
};

export default Logout;

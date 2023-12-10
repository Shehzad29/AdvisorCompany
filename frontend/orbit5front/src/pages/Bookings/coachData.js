import React, { useContext, useState } from "react";
import Datas from "./coachData.json";
import { Link, NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/common/header";
// import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import Footer from "../../components/common/footer";
import { Styles } from "../../Styles/coach";
import "@fortawesome/fontawesome-free/js/all.js";
import video from "../../assets/banner.mp4";
import { UserInfoContext } from "../../App";

function Coach() {
  const [searchTerm, setSearchTerm] = useState("");

  const userInfo = useContext(UserInfoContext);


  return (
    <Styles>
      {/* Main Wrapper */}
      <div className="main-wrapper instructor-page">
        {/* Header 2 */}
        <Header />

        {/* Breadcroumb */}
        {/* <BreadcrumbBox title="Appointments" /> */}

        <div className="video-style">
          <video className="video" autoPlay loop muted>
            <source src={video} type="video/mp4"></source>
          </video>
        </div>
        <div className="bannerheader">
          <span className="headera">Book your </span>
          <span className="headerb">Future Today</span>
        </div>
        {/* Instructor Area */}
        <section className="instructor-area">
          <Container>
            <Row>
              <div class="wrap">
                <div class="search">
                  <input
                    type="text"
                    class="searchTerm"
                    placeholder="Search your Advisor"
                    onChange={(event) => setSearchTerm(event.target.value)}
                  ></input>
                  <button type="submit" class="searchButton">
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </div>
              {Datas.filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (
                  val.personName
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              }).map((data, i) => (
                <Col lg="3" md="4" sm="6" key={i}>
                  <div className="instructor-item">
                    <Link to={"/instructor-details"}>
                      <img
                        src={process.env.PUBLIC_URL + `${data.personImage}`}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                    <div className="img-content text-center">
                      <h5>
                        <Link
                          to={{
                            pathname: `/details/${data.id}`,
                            state: { users: data },
                          }}
                        >
                          {data.personName}
                        </Link>
                      </h5>
                      <p>{data.personTitle}</p>
                      <ul className="list-unstyled list-inline">
                        <li className="list-inline-item">
                          <a
                            href={
                              process.env.PUBLIC_URL + data.socialLinks.linkedin
                            }
                          >
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            href={
                              process.env.PUBLIC_URL + data.socialLinks.twitter
                            }
                          >
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            href={
                              process.env.PUBLIC_URL + data.socialLinks.youtube
                            }
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                      </ul>
                      <div key={data.id}>
                        <NavLink
                            to={{
                                pathname: `/details/${data.id}`,
                                state: { users: data },
                            }}
                            className="button-30 btn btn-info"
                            
                        >
                        Book Appointment
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}

              <Col md="12" className="text-center"></Col>
            </Row>
          </Container>
        </section>

        {/* Footer 2 */}
        <Footer />
      </div>
    </Styles>
  );
}

export default Coach;

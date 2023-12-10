import React, { Component } from 'react';
import Datas from './about-us.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Maps from "../pages/about/maps"
import CountUp from 'react-countup';
import { Styles } from "../Styles/aboutUs";

class AboutUs extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }

    render() {
        return (
            <Styles>
                {/* About Us */}
                <section className="about-us">
                    <Container>
                        <Row>
                            <Col md="6">
                                <div className="about-image">
                                <h1 className="head" > Our Location </h1>
                                    <Maps className="main-img"/>
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="about-content">
                                    <h4 className="about-title">{Datas.title}</h4>
                                    <p className="about-para">{Datas.desc1}<span>{Datas.desc2}</span></p>
                                    <Row>
                                        <Col sm="4">
                                            <div className="counter-box box1 text-center">
                                                <h3><CountUp end={970} duration={5} delay={1.5} /><i className="las la-plus"></i></h3>
                                                <p>Happy Students</p>
                                            </div>
                                        </Col>
                                        <Col sm="4">
                                            <div className="counter-box box2 text-center">
                                                <h3><CountUp end={130} duration={5} delay={1.5} /><i className="las la-plus"></i></h3>
                                                <p>Teachers</p>
                                            </div>
                                        </Col>
                                        <Col sm="4">
                                            <div className="counter-box box3 text-center">
                                                <h3><CountUp end={340} duration={5} delay={1.5} /><i className="las la-plus"></i></h3>
                                                <p>Courses</p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Link className="readmore-btn" to={process.env.PUBLIC_URL + "/about"}>Read More</Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Styles>
        )
    }
}

export default AboutUs

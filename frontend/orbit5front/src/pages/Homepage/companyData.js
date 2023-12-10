import React, { Component } from 'react';
import Datas from '../Homepage/data.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ModalVideo from 'react-modal-video';
import video from './../../assets/video.mp4';
import CountUp from 'react-countup';
import { Styles } from "../../Styles/companyData.js";

class CompanyData extends Component {
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
                                <div className='video-style'>
                                    <video className='video' autoPlay loop muted>
                                        <source  src={video} type="video/mp4"></source>
                                    </video>
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="about-content">
                                    <h4 className="about-title">{Datas.title}</h4>
                                    <p className="about-para">{Datas.desc1}<span>{Datas.desc2}</span></p>
                                    <Row>
                                        <Col sm="4">
                                            <div className="counter-box box1 text-center">
                                                <h3><CountUp end={1011} duration={180} delay={1.5} /><i className="las la-plus"></i></h3>
                                                <p>Our Clients</p>
                                            </div>
                                        </Col>
                                        <Col sm="4">
                                            <div className="counter-box box2 text-center">
                                                <h3><CountUp loop end={130} duration={180} delay={1.5} /><i className="las la-plus"></i></h3>
                                                <p>Advisor</p>
                                            </div>
                                        </Col>
                                        <Col sm="4">
                                            <div className="counter-box box3 text-center">
                                                <h3><CountUp end={340} duration={180} delay={1.5} /><i className="las la-plus"></i></h3>
                                                <p>Refinances</p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Link className="readmore-btn" to={process.env.PUBLIC_URL + "/aboutus"}>Read More</Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Styles>
        )
    }
}

export default CompanyData

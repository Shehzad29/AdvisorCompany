import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../components/common/header';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import Footer from '../../components/common/footer';
import { Styles } from '../../Styles/coach';
import { useLocation} from "react-router-dom";
import BookingForm from './form';

function InstructorDetails() {
    
    const { state } = useLocation();
        return (
            <Styles>
                {/* Main Wrapper */}
                <div className="main-wrapper instructor-details-page">

                    <Header/>

                    {/* Breadcroumb */}
                    <BreadcrumbBox title="Instructor Details" />

                    {/* Instructor Details Area */}
                    <section className="instructor-details-area">
                        <Container>
                            <Row>
                                <><Col md="4" >
                                        <div className="instructor-img">
                                            <BookingForm/>
                                        </div>
                                    </Col>
                
                                    <Col md="7">
                                            <div className="instructor-content">
                                                
                                                <h4>{state.users.personName}</h4>
                                                <span>{state.users.personTitle}</span>
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis tenetur accusantium laudantium! Vitae libero voluptatum velit earum corrupti officia quo, magnam mollitia nam provident tempora. Ipsum quaerat tempora odit maxime. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, molestiae. Quae illum non sit. In sapiente, reiciendis sunt aperiam repellendus quibusdam repudiandae, dolores tempore esse vero aliquid illum neque voluptatem.<br /><br />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, aliquid illo? Quia dolore obcaecati incidunt perferendis minus error repudiandae iure perspiciatis maxime assumenda? Sit dicta, odit sunt maiores incidunt culpa. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda voluptate quisquam quis officiis.</p>
                                            </div>
                                            
                                            <div className="qual-expe d-flex">
                                                <div className="qualification">
                                                    <h5>Qualifications</h5>
                                                    <div className="qual-expe-box">
                                                        <h6>University of California</h6>
                                                        <p>Bachelor of Computer Science  Engeniering</p>
                                                    </div>
                                                    <div className="qual-expe-box">
                                                        <h6>University of California</h6>
                                                        <p>Masters of Computer Science Engeniering</p>
                                                    </div>
                                                </div>
                                                <div className="experiance">
                                                    <h5>Experiance</h5>
                                                    <div className="qual-expe-box">
                                                        <h6>SnazzyTheme.com</h6>
                                                        <p>2016 - 2019</p>
                                                    </div>
                                                    <div className="qual-expe-box">
                                                        <h6>Envato Market</h6>
                                                        <p>2019 - Present</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        
                                        </>
                            

                            </Row>
                        </Container>
                    </section>
                    {/* Footer 2 */}
                    <Footer/>

                </div>
            </Styles>
        )
    }


export default InstructorDetails
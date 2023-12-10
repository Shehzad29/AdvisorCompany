import React, { Component } from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import { Styles } from "../../Styles/breadcrumb";

export class BreadcrumbBox extends Component {
   

    render() {
        return (
            <Styles>
                <section className="breadcrumb-area">
                    <Container>
                        <Row>
                            <Col md="12" className="text-center">
                                <div className="breadcrumb-box">
                                    <h2 className="breadcrumb-title">{this.props.title}</h2>
                                    <Breadcrumb>
                                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                                        <Breadcrumb.Item active>{this.props.title}</Breadcrumb.Item>
                                    </Breadcrumb>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Styles>
        )
    }
}
import React, { Component } from 'react';
import Header from '../../components/common/header';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import AboutUs from '../../components/AboutUs';
import FaqEvent from '../../components/FaqEvent';
import Footer from '../../components/common/footer';
import { Styles } from "./styles/about.js";

class About extends Component {

    render() {
        return (
            <Styles>
                {/* Main Wrapper */}
                <div className="main-wrapper about-page">

                    {/* Header 2 */}
                    <Header />

                    {/* Breadcroumb */}
                    <BreadcrumbBox title="About Us" />

                    {/* About Area */}
                    <AboutUs />

                    {/* Faq & Event Area */}
                    <FaqEvent />

                    {/* Footer 2 */}
                    <Footer />

                </div>
            </Styles>
        )
    }
}

export default About
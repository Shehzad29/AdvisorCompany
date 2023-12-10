import React, { Component } from "react";
import Header from "./../../components/common/header";
import Footer from "./../../components/common/footer";
import Slider from "./../Homepage/slider";
import ServiceDisplay from "../Homepage/serviceDisplay";
import CompanyData from "../Homepage/companyData";
import ServiceMaps from "../Homepage/serviceMaps";

export default class Home extends Component {
  render() {
    return (
      <div className="main-wrapper">
        {/* Header */}
        <Header />

        <Slider />

        <ServiceDisplay />
        <ServiceMaps />

        <CompanyData />
        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

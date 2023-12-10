import React from 'react';
import "../../Styles/serviceMaps.css"
import { NavLink} from "react-router-dom";

const ServiceMaps = () => {
    return (
<main className="site-wrapper">
  <div className="pt-table desktop-768">
    <div className="pt-tablecell page-home relative">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                                <div className="page-title  home text-center">
                                  <div > Services
                                  </div>
                                </div>

                                <div className="hexagon-menu clear">
                                    <div className="hexagon-item">
                                        <div className="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <div className="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <span  className="hex-content">
                                            <span className="hex-content-inner">
                                                <span className="icon">
                                                </span>
                                                <NavLink to="/register" className="title">Register</NavLink>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="hexagon-item">
                                        <div className="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <div className="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <span className="hex-content">
                                            <span className="hex-content-inner">
                                                <span className="icon">
                                                </span>
                                                <NavLink to="/login" className="title">Log In</NavLink>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="hexagon-item">
                                        <div className="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <div className="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <span  className="hex-content">
                                            <span className="hex-content-inner">
                                                <span className="icon">
                                                </span>
                                                <NavLink to="/blogsPage" className="title">Finance Support</NavLink>
                                            </span>
                                        </span>    
                                    </div>
                                    <div className="hexagon-item">
                                        <div className="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <div className="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <span  className="hex-content">
                                            <span className="hex-content-inner">
                                                <span className="icon">
                                                </span>
                                                <NavLink to="/bookings" className="title">Search Advisor</NavLink>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="hexagon-item">
                                        <div className="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <div className="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <span className="hex-content">
                                            <span className="hex-content-inner">
                                                <span className="icon">
                                                </span>
                                                <NavLink to="/events" className="title">Events</NavLink>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="hexagon-item">
                                        <div className="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <div className="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <span className="hex-content">
                                            <span className="hex-content-inner">
                                                <span className="icon">
                                                </span>
                                                <NavLink to="/customerfeedback" className="title">Client Feedback</NavLink>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="hexagon-item">
                                        <div className="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <div className="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <span className="hex-content">
                                            <span className="hex-content-inner">
                                                <span className="icon">
                                                </span>
                                                <NavLink to="/AboutUs" className="title"> About Canadian Finance</NavLink>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  </main>
   )
}

export default ServiceMaps;
import React from 'react';
import './styles.css';
import video from "../../../../../assets/banner4.mp4";

const Header = () => (
  <header className='home-header1'>
   <div className="video-style">
          <video className="video" autoPlay loop muted>
            <source src={video} type="video/mp4"></source>
          </video>
        </div>
        <div className="bannerheader1">
          <span className="headerab"> Build </span>
          <span className="headerb"> Your Finances Today </span>
        </div>
  </header>
);

export default Header;

import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserInfoContext } from "../../App";
import logo from "../../assets/orbit5logo.png";
import "../../Styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AppHeader() {
  const userInfo = useContext(UserInfoContext);
  const { pathname } = useLocation();

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div>
        <ul className="snip1143">
          <img className="im" src={logo} alt="logo" width="100px" height="70px"></img>
          <li>
            <NavLink to="/home" data-hover="Home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/bookings" data-hover="Bookings">
              Bookings
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogsPage" data-hover="Finance support">
              Finance support
            </NavLink>
          </li>
          <li>
            <NavLink to="/Events" data-hover="Events">
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/customerfeedback" data-hover="ClientFeedback">
              ClientFeedback
            </NavLink>
          </li>
          <li>
            <NavLink to="/AboutUs" data-hover="AboutUs">
              AboutUs
            </NavLink>
          </li>
          
        </ul>
        {/* <h2>
          {userInfo.username ? (
            <p>
              {pathname === "/home" ? (
                <h3>{" Welcome " + userInfo.username + " to Orbit5"}</h3>
              ) : null}
              {pathname !== "/logout" ? (
                <p className="vatsal">{" Usertype : " + userInfo.userType}</p>
              ) : null}
            </p>
          ) : (
            " "
          )}
        </h2> */}
      </div>
    </>
  );
}
export default AppHeader;

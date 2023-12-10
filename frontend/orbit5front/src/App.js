import React, { useState, useContext, useEffect, createContext } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";
import Homepage from "./pages/Homepage/homepage";
import CustomerFeedback from "./pages/Customerfeedback/customerfeedback";
import Events from "./pages/Events/events";
import Logout from "./pages/Logout/logout";
import Booking from "./pages/Bookings/coachData";
import InstructorDetails from "./pages/Bookings/appointment";
import Blog from "./pages/Blogs/pages/Blog";
import Home from "./pages/Blogs/pages/Home";
import About from "./pages/about/About";
import Payment from "./pages/Payment/payment";

export const UserInfoContext = createContext();
export default function App() {
  const [userInfo, setUserInfo] = useState({});

  useEffect(async () => {
    let res = await fetch("/home", {
      method: "GET",
      cache: "no-cache",
      headers: new Headers({
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/x-www-form-urlencoded",
      }),
      // headers: { "Content-Type": "application/json" },
      // authorization: ),
    });
    res = await res.json();
    setUserInfo(res);
  }, []);

  return (
    <div>
      <UserInfoContext.Provider value={userInfo}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route
              exact
              path="/customerfeedback"
              component={CustomerFeedback}
            />
            <Route exact path="/events" component={Events} />
            <Route exact path="/logout" component={Logout} />

            <Route exact path="/bookings" component={Booking} />
            <Route exact path="/details/:id" component={InstructorDetails} />
            <Route path="/blog/:id" component={Blog} />
            <Route path="/blogsPage" component={Home} />
            <Route path="/aboutus" component={About} />
            <Route exact path="/checkout" component={Payment} />

            <Homepage />
          </Switch>
        </BrowserRouter>
      </UserInfoContext.Provider>
    </div>
  );
}

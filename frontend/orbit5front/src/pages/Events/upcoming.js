import React, {useContext} from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { UserInfoContext } from "../../App";
import emailjs from "emailjs-com";
import Badge from "react-bootstrap/Badge";
import "../../Styles/events.css";



const Upcoming = () => {
  const userInfo = useContext(UserInfoContext);
  console.log("This is the user info")
  const allEvents = [
    {
    title:"Canada Job Offer",
    date: "Mon, Sept 19–Tue, Sept 20",
    area1:'Hamilton, 1663 Queen St E',
    area2:'Hamilton, ON',
    image: "reunion.jpeg",
    description:'This event is focused on building credit for your company . We will also throw light on how to sharpen your technical and soft skills.',
  },
  {
    title:"Access to Professionals",
    date: "Mon, Jul 18–Tue, Jul 19",
    area1:'HISTORY, 1663 Queen St E',
    area2:'Toronto, ON',
    image: "reunion2.jpeg",
    description:'We have limited tickets due to the huge demand. This is a big opportunity to network with recruiters of well-known companies and get your chance to working with them.',
  },
  {
    title:"International Conference",
    date: "Tue, Jun 14–Wed, Jun 15",
    area1:'Toronto',
    area2:'Toronto, ON',
    image: "reunion3.jpeg",
    description:'This is the biggest event of the year where the client will be presented a number of global opportunities.',
  },
]
  return (
    <>
      <div>
        <div className="">
          <div className="text">
            <h1>
              Upcoming Events <Badge bg="secondary">New</Badge>
            </h1>
            <h5>
              Develop a Successful Career By Choosing One of Our Motivating
              Events <Badge bg="secondary"></Badge>
            </h5>
            <h6>
              __________________________ <Badge bg="secondary"></Badge>
            </h6>
          </div>
          <Container>
            <CardGroup>
              {
                allEvents.map(
                  (item)=>{
                    return(
                      <Card className="mainevent">
                      <div className="project__box pointer relative">
                        <div className="project__box__img pointer relative">
                          <div className="project__img__box">
                            <img src={item.image} alt="" className="project__img" />
                          </div>
                          <div className="mask__effect"></div>
                        </div>
                      </div>
      
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text className="top-text">
                          {item.date}
                          <br />
                          {item.area1}
                          <br />
                          {item.area2}
                        </Card.Text>
      
                        <Card.Text>
                          {item.description}
                        </Card.Text>
                      </Card.Body>
      
                      <Card.Body className="card-bottom">
                        <Button onClick={()=>{
                          if (userInfo.userType === "client")
                          {
                            var data={
                              "from_name":userInfo.firstname + " " + userInfo.lastname,
                              "email":userInfo.email,
                              "title":item.title,
                              "date":item.date,
                              "time":item.description,
                            }
                            emailjs
                            .send(
                              "service_gehqk6y",
                              "template_jy4bszl",
                              data,
                              "JzfNSlFEGuc5F7SlH"
                            )
                            .then(
                              (result) => {
                                // console.log(result.text);
                                // e.target.reset();
                                window.alert("Thank you for booking!");
                                  // setSuccess(email);
                              },
                              (error) => {
                                console.log(error.text);
                              }
                            );
                          }
                          if (userInfo.userType === "coach")
                          {
                            window.alert(
                              "User must be Client to book an event."
                            );
                          }
                        }}>Book Here</Button>
                        <p></p>
                        <Badge pill bg="success">
                          Available
                        </Badge>{" "}
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-muted">Last updated 5 mins ago</small>
                      </Card.Footer>
                    </Card>
                    )
                  }
                )
              }
            

              <p></p>

              {/* <Card>
                <div className="project__box pointer relative">
                  <div className="project__box__img pointer relative">
                    <div className="project__img__box">
                      <img src={Reunion2} alt="" className="project__img" />
                    </div>
                    <div className="mask__effect"></div>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>Access to Professionals</Card.Title>
                  <Card.Text className="top-text">
                    Mon, Jul 18–Tue, Jul 19
                    <br />
                    HISTORY, 1663 Queen St E
                    <br />
                    Toronto, ON
                  </Card.Text>
                  <Card.Text>
                    We have limited tickets due to the huge demand. Please
                    reserve your ticket right away and once you have registered
                    please show up.{" "}
                  </Card.Text>
                </Card.Body>
                <Card.Body className="card-bottom">
                  <Card.Link href="#">Info</Card.Link>
                  <Card.Link href="#">Book Here</Card.Link>
                  <p></p>
                  <Badge pill bg="success">
                    Available
                  </Badge>{" "}
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <div className="project__box pointer relative">
                  <div className="project__box__img pointer relative">
                    <div className="project__img__box">
                      <img src={Reunion3} alt="" className="project__img" />
                    </div>
                    <div className="mask__effect"></div>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>International Conference</Card.Title>
                  <Card.Text className="top-text">
                    Tue, Jun 14–Wed, Jun 15
                    <br />
                    Toronto <br />
                    Toronto, ON
                  </Card.Text>
                  <Card.Text>
                    We have limited tickets due to the huge demand. Please
                    reserve your ticket right away and once you have registered
                    please show up.
                  </Card.Text>
                </Card.Body>
                <Card.Body className="card-bottom">
                  <Card.Link href="#">Info</Card.Link>
                  <Card.Link href="#">Book Here</Card.Link>
                  <p></p>
                  <Badge pill bg="success">
                    Available
                  </Badge>{" "}
                </Card.Body>

                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card> */}
            </CardGroup>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Upcoming;

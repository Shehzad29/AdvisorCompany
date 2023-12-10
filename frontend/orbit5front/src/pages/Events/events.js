import Header from "./../../components/common/header";
import React, { Component } from "react";
import Footer from "./../../components/common/footer";
import Upcoming from "../Events/upcoming";
import SliderEvents from "../Events/sliderEvents";

export default class Events extends Component {
  render() {
    return (
      <div className="">
        {/* Header */}
        <Header />

        <SliderEvents />

        <Upcoming />
        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

// import Header from "./../../components/common/header";
// import React from "react";
// import Footer from "./../../components/common/footer";
// import { useState } from "react";
// import '../../Styles/events.css';

// export default function Events() {

//     const [toggleState, setToggleState] = useState(1);
//     const toggleTab = (index) => {
//         setToggleState(index);
//     };

//     return (
//         <div className="">
//             <Header />

//             <div className="text_box">
//                 <div className="bloc-tabs">
//                     <button
//                         className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
//                         onClick={() => toggleTab(1)}
//                     >
//                         April
//                     </button>
//                     <button
//                         className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
//                         onClick={() => toggleTab(2)}
//                     >
//                         May
//                     </button>
//                     <button
//                         className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
//                         onClick={() => toggleTab(3)}
//                     >
//                         June
//                     </button>
//                     <button
//                         className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
//                         onClick={() => toggleTab(4)}
//                     >
//                         July
//                     </button>
//                 </div>

//                 <div className="content-tabs">
//                     <div
//                         className={toggleState === 1 ? "content  active-content" : "content"}
//                     >
//                         <h2>Content 1</h2>
//                         <span>Sunday</span>
//                       <span>0ctober 27 2019</span>
//                         <hr />
//                         <p>
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
//                             praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
//                             vel voluptatum?
//                         </p>
//                     </div>

//                     <div
//                         className={toggleState === 2 ? "content  active-content" : "content"}
//                     >
//                         <h2>Content 2</h2>
//                         <hr />
//                         <p>
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
//                             voluptatum qui adipisci.
//                         </p>
//                     </div>

//                     <div
//                         className={toggleState === 3 ? "content  active-content" : "content"}
//                     >
//                         <h2>Content 3</h2>
//                         <hr />
//                         <p>
//                             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
//                             nostrum rerum laudantium totam unde adipisci incidunt modi alias!
//                             Accusamus in quia odit aspernatur provident et ad vel distinctio
//                             recusandae totam quidem repudiandae omnis veritatis nostrum
//                             laboriosam architecto optio rem, dignissimos voluptatum beatae
//                             aperiam voluptatem atque. Beatae rerum dolores sunt.
//                         </p>
//                     </div>
//                     <div
//                         className={toggleState === 4 ? "content  active-content" : "content"}
//                     >
//                         <h2>Content 4</h2>
//                         <hr />
//                         <p>
//                             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
//                             nostrum rerum laudantium totam unde adipisci incidunt modi alias!
//                             Accusamus in quia odit aspernatur provident et ad vel distinctio
//                             recusandae totam quidem repudiandae omnis veritatis nostrum
//                             laboriosam architecto optio rem, dignissimos voluptatum beatae
//                             aperiam voluptatem atque. Beatae rerum dolores sunt.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             {/* <Footer  /> */}

//         </div>
//     );
// }

// import React from "react";
// import Header from "./../../components/common/header";
// import Footer from "./../../components/common/footer";
// import '../../Styles/events.css';
// import Photo from '../../assets/post-photo.jpg';
// import { Container, Row, Col } from "react-bootstrap";

// export default function Events() {

//         return (
//             <div className="">
//                 <Header />
//                 <Container>
//                     I<div className="blog-post">
//                         <div className="blog-post__img">
//                             <img src={Photo} alt="" />
//                         </div>
//                         <div className="blog-post__info">
//                             <div className="blog-post__date">
//                                 <span>Sunday</span>
//                                 <span>0ctober 27 2019</span>
//                             </div>
//                             <h1 className="blog-post__title">Shark Sighting</h1>
//                             <p className="blog-post__text">
//                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
//                                 industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
//                                 scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
//                                 into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
//                                 release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
//                                 software like Aldus PageMaker including versions of Lorem Ipsum.
//                             </p>

//                             <a href="#" className="blog-post__cta">Read more</a>
//                         </div>
//                     </div>
//                 </Container>
//                 < Footer />

//             </div>
//         )

// }

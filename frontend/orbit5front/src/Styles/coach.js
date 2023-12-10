import styled from "styled-components";
import { colors } from "../components/common/elements";

export const Styles = styled.div`
.video {
    position: relative;
    top: 0px;
    left: 0;
    width: 100%;
    height: 300px;
    -o-object-fit: cover;
       object-fit: cover;
    -o-object-position: center;
       object-position: center;
       opacity:110%
  }
  .bannerheader{
    position: absolute;
    top: 230px;
    left: 30%;
    font-weight: bold;
    font-size: 50px;
  }
  .headera{
    color: ${colors.black1};
  }
  .headerb{
    color: ${colors.orange};
  }
.search {
    width: 100%;
    position: relative;
    display: flex;
  }
  
  .searchTerm {
    width: 100%;
    border: 3px solid ${colors.black1};
    border-right: none;
    padding: 5px;
    height: 50px;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: ${colors.supblue};
    font-weight: bold;
  }
  
  .searchTerm:focus{
    color: ${colors.black1};
    font-weight: bold;
  }
  
  .searchButton {
    width: 40px;
    height: 50px;
    border: 1px solid ${colors.black1};
    background: ${colors.black1};
    text-align: center;
    color: #fff;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-size: 20px;
  }
  
  .wrap{
    width: 85%;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
    .instructor-page {
        .instructor-area {
            padding: 60px 0;
            .instructor-item {
                position     : relative;
                margin-bottom: 62px;

                a {
                    img {
                        border-radius : 5px;
                    }
                }

                .img-content {
                    background: #ffffff;
                    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.07);
                    position  : absolute;
                    bottom    : -30px;
                    left      : 10%;
                    width     : 80%;
                    z-index   : 1;
                    border-radius : 5px;
                    padding: 15px 0;

                    h5 {
                        margin-bottom: 5px;
                        a {
                            color        : ${colors.black2};
                            font-weight  : 600;
                            &:hover {
                                color : ${colors.green};
                            }
                        }
                    }

                    p {
                        font-size    : 14px;
                        color        : ${colors.text3};
                        font-weight  : 500;
                        margin-bottom: 5px;
                    }

                    ul {
                        li {
                            a {
                                i {
                                    font-size: 14px;
                                    color    : #ffffff;
                                    width    : 33px;
                                    height   : 33px;
                                    border-radius : 50%;
                                    padding-top: 10px;
                                    transition : all 0.2s ease;

                                    &:hover {
                                        background-color: ${colors.green} !important;
                                    }
                                }

                                i.fa-facebook-f {
                                    background-color: #4267B2;
                                }

                                i.fa-twitter {
                                    background-color: #1DA1F2;
                                }

                                i.fa-youtube {
                                    background-color: #DD1343;
                                }
                            }
                        }
                    }
                }
            }

            @media(max-width: 767px) {
                padding : 40px 0 30px;
            }
        }
    }

    .instructor-details-page {
        .instructor-details-area {
            padding : 70px 0 63px;
            .instructor-img {
                margin-bottom : 55px;
                img {
                    border-radius : 5px;
                    margin-bottom : 20px;
                }
                ul.getintouch {
                    margin-bottom: 20px;
                    li {
                        font-size: 20px;
                        color: ${colors.black2};
                        font-weight : 500;
                        margin-bottom: 5px;
                        i {
                            font-size: 26px;
                            color: ${colors.green};
                            vertical-align: text-bottom;
                            margin-right: 5px;

                            @media(max-width: 991px) {
                                font-size: 20px;
                            }
                        }

                        @media(max-width: 991px) {
                            font-size: 16px;
                        }
                    }
                }

                ul.social {
                    li {
                        margin-right: 10px;
                        a {
                            text-align: center;
                            position  : relative;
                            height    : 18px;
                            display   : inline-block;
                            padding: 20px;

                            &:before {
                                content           : "";
                                position          : absolute;
                                border-width      : 9px 17px;
                                border-style      : solid;
                                border-top-color  : transparent;
                                border-right-color: transparent;
                                border-left-color : transparent;
                                top               : -18px;
                                left              : 0;
                                z-index           : 1;
                                transition : all 0.2s ease;
                            }

                            &:after {
                                content            : "";
                                position           : absolute;
                                border-width       : 9px 17px;
                                border-style       : solid;
                                border-right-color : transparent;
                                border-bottom-color: transparent;
                                border-left-color  : transparent;
                                bottom             : -18px;
                                left               : 0;
                                z-index            : 1;
                                transition : all 0.2s ease;
                            }

                            i {
                                font-size: 14px;
                                color    : #ffffff;
                                width    : 34px;
                            }

                            &:hover {
                                background-color: ${colors.green} !important;

                                &:before {
                                    border-bottom-color: ${colors.green} !important;
                                }

                                &:after {
                                    border-top-color: ${colors.green} !important;
                                }
                            }
                        }

                        &:nth-child(1) {
                            a {
                                background-color: #4267B2;

                                &:before {
                                    border-bottom-color: #4267B2;
                                }

                                &:after {
                                    border-top-color: #4267B2;
                                }
                            }
                        }

                        &:nth-child(2) {
                            a {
                                background-color: #1DA1F2;

                                &:before {
                                    border-bottom-color: #1DA1F2;
                                }

                                &:after {
                                    border-top-color: #1DA1F2;
                                }
                            }
                        }

                        &:nth-child(3) {
                            a {
                                background-color: #2867B2;

                                &:before {
                                    border-bottom-color: #2867B2;
                                }

                                &:after {
                                    border-top-color: #2867B2;
                                }
                            }
                        }

                        &:nth-child(4) {
                            a {
                                background-color: #DD1343;

                                &:before {
                                    border-bottom-color: #DD1343;
                                }

                                &:after {
                                    border-top-color: #DD1343;
                                }
                            }
                        }

                        &:nth-child(5) {
                            a {
                                background-color: #ea4c89;

                                &:before {
                                    border-bottom-color: #ea4c89;
                                }

                                &:after {
                                    border-top-color: #ea4c89;
                                }
                            }
                        }

                        &:last-child {
                            margin-right : 0;
                        }
                    }
                }

                @media(max-width: 575px) {
                    margin-bottom: 30px;
                }
            }

            .instructor-content {
                h4 {
                    color : ${colors.black1};
                    font-size: 30px;
                    font-weight: 700;
                    margin-bottom: 10px;

                    @media(max-width: 575px) {
                        font-size : 20px;
                    }
                }
                span {
                    font-size : 20px;
                    color : ${colors.blue};
                    font-weight: 500;
                    display : inline-block;
                    margin-bottom: 15px;

                    @media(max-width: 575px) {
                        font-size : 15px;
                    }
                }
                p {
                    font-size: 15px;
                    color: ${colors.text2};
                    font-weight: 300;
                    line-height: 25px;
                    margin-bottom: 40px;

                    @media(max-width: 575px) {
                        font-size : 14px;
                    }
                }
            }
            .qual-expe {
                h5 {
                    color: ${colors.blue};
                    font-weight: 700;
                    padding-bottom: 10px;
                    margin-bottom: 20px;
                    position: relative;
                    &:before {
                        position: absolute;
                        content: "";
                        background: ${colors.green};
                        width: 50px;
                        height: 2px;
                        bottom: 0;
                        left: 0;
                    }


                }
                .qual-expe-box {
                    margin-bottom: 20px;
                    h6 {
                        color: ${colors.black2};
                        margin-bottom: 8px;
                        font-weight: 700;

                        @media(max-width: 575px) {
                            font-size : 15px;
                        }
                    }
                    p {
                        font-size : 15px; 
                        color: ${colors.text3};

                        @media(max-width: 575px) {
                            font-size : 14px;
                        }
                    }
                }
                .qualification {
                    margin-right : 100px;

                    @media(max-width: 575px) {
                        margin-right : 20px;
                    }
                }

                @media(max-width: 360px) {
                    display: block !important;
                }
            }

            .instructor-course-title {
                h5 {
                    color: ${colors.black2};
                    font-weight: 600;
                    padding-bottom: 10px;
                    margin-bottom: 35px;
                    position: relative;
                    &:before {
                        position: absolute;
                        content: "";
                        background: ${colors.green};
                        width: 50px;
                        height: 2px;
                        bottom: 0;
                        left: 0;
                    }
                }
            }
            .instructor-course-slider {
                position: relative;
                .course-item {
                    border: 1px solid ${colors.border1};
                    border-radius : 5px;
                    transition : all 0.2s ease;
                    margin-bottom: 30px;

                    .course-image {
                        width              : 100%;
                        height             : 220px;
                        background-size    : cover;
                        background-position: center;
                        background-repeat  : no-repeat;
                        border-radius : 5px 5px 0 0;
                        position: relative;

                        .author-img {
                            position: absolute;
                            left    : 20px;
                            bottom  : 20px;

                            img {
                                max-width: 40px;
                                border-radius : 50%;
                                margin-right: 5px;
                            }

                            .title {
                                background: #ffffff;
                                padding   : 3px 8px;
                                border-radius : 5px;

                                p {
                                    font-size    : 12px;
                                    color        : ${colors.black1};
                                    font-weight  : 500;
                                    margin-bottom: -4px;
                                }

                                span {
                                    font-size  : 11px;
                                    color      : ${colors.text3};
                                    font-weight: 500;
                                }
                            }

                        }

                        .course-price {
                            p {
                                font-size  : 16px;
                                color      : #ffffff;
                                background : ${colors.bg1};
                                position   : absolute;
                                right      : 20px;
                                bottom     : 20px;
                                padding    : 8px 10px;
                                font-weight: 500;
                                border-radius : 5px;
                            }
                        }
                    }

                    .course-content {
                        background: #fff;
                        padding   : 20px 25px;
                        border-radius : 0 0 5px 5px;

                        h6.heading {
                            a {
                                color        : ${colors.black1};
                                font-weight  : 600;
                                display      : inline-block;
                                margin-bottom: 12px;

                                &:hover {
                                    color: ${colors.green};
                                }
                            }
                        }

                        p.desc {
                            font-size     : 14px;
                            color         : ${colors.text3};
                            line-height   : 25px;
                            border-bottom : 1px solid ${colors.border1};
                            padding-bottom: 10px;
                            margin-bottom : 12px;
                        }

                        .course-face {

                            .duration,
                            .student {
                                p {
                                    font-size: 13px;
                                    color    : ${colors.text3};

                                    i {
                                        font-size     : 16px;
                                        color         : ${colors.green};
                                        vertical-align: text-bottom;
                                        margin-right  : 3px;
                                    }
                                }
                            }

                            .rating {
                                ul {
                                    li {
                                        margin-right: 0;

                                        i {
                                            font-size: 14px;
                                            color    : ${colors.yellow};
                                        }

                                        &:last-child {
                                            font-size: 13px;
                                            color    : ${colors.text3};
                                        }
                                    }
                                }
                            }
                        }
                    }

                    &:hover {
                        box-shadow: 0 12px 25px rgba(0, 0, 0, 0.07);
                    }
                }

                .slider-dot {
                    margin-top: 17px !important;

                    .swiper-pagination-bullet {
                        width     : 22px;
                        height    : 9px;
                        background: ${colors.text4};
                        display   : inline-block;
                        margin    : 3px;
                        opacity   : 1 !important;
                        border-radius : 5px;
                    }

                    .swiper-pagination-bullet.swiper-pagination-bullet-active {
                        background: ${colors.green};
                    }
                }
            }

            @media(max-width: 767px) {
                padding: 40px 0 30px;
            }
        }
    }
    .button-30 {
        align-items: center;
        appearance: none;
        background-color: ${colors.black1};
        border-radius: 4px;
        border-width: 0;
        box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
        box-sizing: border-box;
        color: #ffffff;
        cursor: pointer;
        display: inline-flex;
        font-family: "JetBrains Mono",monospace;

        height: 48px;
        justify-content: center;
        line-height: 1;
        list-style: none;
        overflow: hidden;
        padding-left: 16px;
        padding-right: 16px;
        position: relative;
        text-align: left;
        text-decoration: none;
        transition: box-shadow .15s,transform .15s;
        user-select: none;
        font-weight: bold;
        -webkit-user-select: none;
        touch-action: manipulation;
        white-space: nowrap;
        will-change: box-shadow,transform;
        font-size: 18px;
      }
      
      .button-30:focus {
        box-shadow: #45bfed 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
      }
      
      .button-30:hover {
        box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
        transform: translateY(-2px);
      }
      
      .button-30:active {
        box-shadow: #45bfed 0 3px 7px inset;
        transform: translateY(2px);
      }
    
`;
import styled from "styled-components";
import { colors } from "../components/common/elements";

export const Styles = styled.div`
    .about-us {
        padding: 78px 0 85px;

        .video-style {
            /* width is set as 100% here. any width can be specified as per requirement */
            width: 100%;
            padding-top: 60%;
            height: 0px;
            position: relative;
        }
        
        .video {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }
        

        .about-content {
            h4.about-title {
                color        : ${colors.black1};
                line-height  : 35px;
                font-weight  : 600;
                margin-bottom: 25px;

                @media(max-width: 575px) {
                    margin-bottom: 15px;
                    font-size: 20px;
                }
            }

            p.about-para {
                font-size    : 15px;
                color        : ${colors.text3};
                line-height  : 25px;
                margin-bottom: 40px;

                span {
                    display   : block;
                    margin-top: 20px;
                }

                @media(max-width: 575px) {
                    margin-bottom : 20px;
                }
            }

            .counter-box {
                h3 {
                    margin-bottom: 10px;

                    span {
                        font-weight: 600;
                    }

                    i {
                        font-size     : 20px;
                        vertical-align: middle;
                    }
                }

                p {
                    font-size  : 14px;
                    color      : ${colors.text3};
                    font-weight: 500;
                }

                @media(max-width: 575px) {
                    display : none;
                }
            }

            .counter-box.box1 {
                h3 {
                    color: ${colors.red};
                }
            }

            .counter-box.box2 {
                h3 {
                    color: ${colors.purple};
                }
            }

            .counter-box.box3 {
                h3 {
                    color: ${colors.blue};
                }
            }

            a.readmore-btn {
                font-size : 14px;
                color     : #fff;
                background: ${colors.black1};
                display   : inline-block;
                width     : 145px;
                height    : 40px;
                text-align: center;
                padding   : 11px;
                border-radius : 5px;
                margin-top: 40px;

                &:hover {
                    background: ${colors.gr_bg2};
                }

                @media(max-width: 575px) {
                    margin-top : 0;
                }
            }
        }

        @media(max-width: 767px) {
            padding: 30px 0 40px;
        }
    }
`;
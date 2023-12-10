import styled from "styled-components";
import { colors } from "../components/common/elements";

export const Styles = styled.div`
    .newsletter-form-area {
        width: 100%;
        height: 40vh;
        margin-top: 20px;
        position: relative;
        background-color: ${colors.bg1};

        .newsletter-container {
            .newsletter-box {
                background: ${colors.black1};
                padding   : 37px 40px 40px;
                border-radius : 5px;
                position: absolute;
                width   : 100%;
                bottom  : 0;
                left    : 0;
                z-index : 1;

                .sec-title {
                    h4 {
                        color        : #ffffff;
                        margin-bottom: 35px;

                        @media(max-width: 575px) {
                            margin-bottom: 15px;
                            font-size: 20px;
                        }
                    }
                }

                form.form {
                    p.form-control {
                        padding   : 0;
                        width     : auto;
                        height    : auto;
                        background: transparent;
                        border    : none;
                        position  : relative;

                        input {
                            width           : 100%;
                            height          : 50px;
                            background-color: #ffffff;
                            font-size       : 14px;
                            padding         : 15px 20px;
                            color           : ${colors.black1};
                            border          : none;
                            border-radius : 5px;

                            &::placeholder {
                                font-size : 14px;
                                font-style: italic;
                                color     : ${colors.bg1};
                            }

                            @media(max-width: 480px) {
                                height: 42px;
                                padding: 15px;
                            }
                        }

                        span {
                            color      : #ffffff;
                            font-weight: 300;
                            position   : absolute;
                            bottom     : -22px;
                            left       : 0;
                            visibility : hidden;
                        }

                        @media(max-width: 767px) {
                            margin-bottom: 25px;
                        }
                    }

                    p.form-control.success {
                        input {
                            border: 2px solid ${colors.green};
                        }

                        &::before {
                            position   : absolute;
                            content    : "\f058";
                            font-family: "Line Awesome Free";
                            font-size  : 24px;
                            color      : ${colors.green};
                            font-weight: 900;
                            top        : 8px;
                            right      : 10px;
                        }
                    }

                    p.form-control.error {
                        input {
                            border: 2px solid ${colors.red};
                        }

                        &::before {
                            position   : absolute;
                            content    : "\f06a";
                            font-family: "Line Awesome Free";
                            font-size  : 24px;
                            color      : ${colors.red};
                            font-weight: 900;
                            top        : 8px;
                            right      : 10px;
                        }
                    }

                    p.form-control.error {
                        span {
                            visibility: visible;
                        }
                    }

                    button {
                        font-size  : 14px;
                        color      : #fff;
                        background : ${colors.gr_bg};
                        width      : 100%;
                        height     : 50px;
                        font-weight: 500;
                        border     : none;
                        border-radius : 5px;
                        text-transform: uppercase;

                        i {
                            font-size     : 22px;
                            color         : ${colors.green};
                            margin-right  : 5px;
                            vertical-align: text-bottom;
                            line-height   : 19px;
                        }

                        &:hover {
                            background: ${colors.green};

                            i {
                                color: #ffffff;
                            }
                        }

                        @media(max-width: 480px) {
                            height: 42px;
                        }
                    }
                }

                @media(max-width: 767px) {
                    padding: 25px 35px 35px;
                }
            }
        }
    }
`;
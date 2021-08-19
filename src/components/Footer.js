import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'; // This throws, styles is defined but never user, that is incorrect, styles is used in <Carousel/>

const Footer = () => {
    let slideLogo = require("./icon_person.png").default;
    return (
        <div className="c-footer">
            <div className="c-slider-container">
                <Carousel
                    showArrows={false}
                    autoPlay={true}
                    infiniteLoop={true}
                    interval={4000}
                    swipeable={true}
                    className="c-slider"
                    showStatus={false}
                    showThumbs={false}
                >
                    <div className="c-slide">
                        <div className="c-slide-icon">
                            <img src={slideLogo} alt="Slide logo"/>
                        </div>
                        <div className="c-slide-text">
                            <h2 className="c-slide-heading">
                                Slide Heading
                            </h2>
                            <p>Lorem ipsum dolor si amet. Lorem ipsum dolor si amet.
                                Lorem ipsum dolor si amet. Lorem ipsum dolor si amet.
                                Lorem ipsum dolor si amet. Lorem ipsum dolor si amet.<br></br>
                                Lorem ipsum dolor si amet. Lorem ipsum dolor si amet.
                            </p>
                        </div>
                    </div>
                    <div className="c-slide">
                        <div className="c-slide-icon">
                            <img src={slideLogo} alt="Slide logo"/>
                        </div>
                        <div className="c-slide-text">
                            <h2 className="c-slide-heading">
                                Slide Heading
                            </h2>
                            <p>Lorem ipsum dolor si amet. Lorem ipsum dolor si amet.
                                Lorem ipsum dolor si amet. Lorem ipsum dolor si amet.
                                Lorem ipsum dolor si amet. Lorem ipsum dolor si amet.<br></br>
                                Lorem ipsum dolor si amet. Lorem ipsum dolor si amet.
                            </p>
                        </div>
                    </div>
                    <div className="c-slide">
                        <div className="c-slide-icon">
                            <img src={slideLogo} alt="Slide logo"/>
                        </div>
                        <div className="c-slide-text">
                            <h2 className="c-slide-heading">
                                Slide Heading
                            </h2>
                            <p>Lorem ipsum dolor si amet. Lorem ipsum dolor si amet.
                                Lorem ipsum dolor si amet. Lorem ipsum dolor si amet.
                                Lorem ipsum dolor si amet. Lorem ipsum dolor si amet.<br></br>
                                Lorem ipsum dolor si amet. Lorem ipsum dolor si amet.
                            </p>
                        </div>
                    </div>
                </Carousel>
            </div>
            <div className="c-gold-container">
                <h3>POTŘEBUJETE PORADIT S INVESTICÍ NA ROIER.CZ?</h3>
                <a href="/">office@roier.cz</a>
            </div>
            <div className="c-contact-container">
                <p>
                    Bedby, s. r. o. <br></br>

                    IČO: 09565311<br></br>

                    VŠE xPORT Business Accelerator<br></br>

                    Jeseniova 2769, 130 00 Praha 3<br></br>

                    Copyright 2021 Bedby, s. r. o.<br></br>
                </p>
            </div>
        </div>
    );
}

export default Footer;
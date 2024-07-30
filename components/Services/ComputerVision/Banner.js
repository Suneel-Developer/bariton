import React from 'react';

const Banner = () => {
    return (
        <div id="banner" className="banner">
            <div className="banner-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 align-self-center">
                            <h1>Computer Vizion for the Real World</h1>
                            <p className="mb-5">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </p>
                            <a href="#" className="button mb-lg-0 mb-5">See Solutions</a>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 text-right position-relative">
                            <img src="/images/banner/02.png" className="img-fluid banner-box" alt="images" />
                            <div className="banner-img text-center">
                                <img className="img-fluid rounded-circle position-relative" src="/images/banner/01.jpg" alt="image" />
                                <a href="#" className="video-btn iq-video popup-youtube">
                                    <i class="fas fa-light fa-play"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;

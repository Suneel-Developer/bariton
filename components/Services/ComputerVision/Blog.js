import dynamic from 'next/dynamic';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const OwlCarousel = dynamic(() => import('./ClientSideOwlCarousel'), {
    ssr: false,
});

const options = {
    loop: true,
    margin: 30,
    nav: true,
    items: 1,
    autoplay: true,
    dots: false,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        },
    },
};


const Blog = () => {

    return (
        <section class="section our-partners bg-light">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-lg-5 col-sm-12">
                        <h2 class="font-weight-bold">Trusted by Partners</h2>
                        <h5 class="mb-5">The point of using Lorem Ipsum</h5>
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-sm-6 col-6">
                                <a href="#"><img src="/images/clients2/gray/01.png" class="img-fluid partners-img" alt="img" /></a>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6 col-6">
                                <a href="#"><img src="/images/clients2/gray/02.png" class="img-fluid partners-img" alt="img" /></a>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6 col-6">
                                <a href="#"><img src="/images/clients2/gray/03.png" class="img-fluid partners-img" alt="img" /></a>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6 col-6">
                                <a href="#"><img src="/images/clients2/gray/04.png" class="img-fluid partners-img" alt="img" /></a>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6 col-6">
                                <a href="#"><img src="/images/clients2/gray/05.png" class="img-fluid partners-img" alt="img" /></a>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6 col-6">
                                <a href="#"><img src="/images/clients2/gray/06.png" class="img-fluid partners-img" alt="img" /></a>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6 col-6 mb-lg-0">
                                <a href="#"><img src="/images/clients2/gray/07.png" class="img-fluid partners-img" alt="img" /></a>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6 col-6 mb-lg-0">
                                <a href="#"><img src="/images/clients2/gray/08.png" class="img-fluid partners-img" alt="img" /></a>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6 col-6 mb-lg-0">
                                <a href="#"><img src="/images/clients2/gray/09.png" class="img-fluid partners-img" alt="img" /></a>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6 col-6">
                                <a href="#"><img src="/images/clients2/gray/01.png" class="img-fluid partners-img" alt="img" /></a>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6 col-6">
                                <a href="#"><img src="/images/clients2/gray/02.png" class="img-fluid partners-img" alt="img" /></a>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6 col-6">
                                <a href="#"><img src="/images/clients2/gray/03.png" class="img-fluid partners-img" alt="img" /></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12">
                        <h2 class="font-weight-bold ml-4">Latest Blog</h2>
                        <h5 class="mb-5 ml-4">The point of using Lorem Ipsum</h5>
                        <div class="row">
                            <div class="col-lg-12">
                                <OwlCarousel className="owl-theme" {...options}>
                                    <div className="item">
                                        <div className="blogs-box">
                                            <img src="/images/about2/02.jpg" className="img-fluid" alt="img" />
                                            <div className="blog-main">
                                                <div className="blog-info blog-info1 mb-4">
                                                    <a href="#" className='blog-info12'>
                                                        <img src="/images/blog2/clients/01.jpg" className="img-fluid rounded-circle user-img" alt="image" style={{ marginRight: "12px" }} />
                                                        <span className="iq-fw-7 text-black iq-font-18">John Deo</span>
                                                    </a>
                                                    <ul className="d-inline-block float-right mb-3">
                                                        <li className="d-inline-block">
                                                            <a href="#"><i className="far fa-thumbs-up"></i> <span className="text-black iq-fw-7 iq-font-14">90</span></a>
                                                        </li>
                                                        <li className="d-inline-block ml-3" style={{ marginLeft: "12px" }}>
                                                            <a href="#"><i className="far fa-comment-alt"></i> <span className="text-black iq-fw-7 iq-font-14">120</span></a>
                                                        </li>
                                                    </ul>
                                                    <div className="clear-fix"></div>
                                                </div>
                                                <div className="blog-detail">
                                                    <a href="blog.html"><h4>The point of using Lorem Ipsum is that</h4></a>
                                                    <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="blogs-box">
                                            <img src="/images/about2/01.jpg" className="img-fluid" alt="img" />
                                            <div className="blog-main">
                                                <div className="blog-info blog-info1 mb-4">
                                                    <a href="#" className='blog-info12'>
                                                        <img src="/images/blog2/clients/02.jpg" className="img-fluid rounded-circle mr-3 user-img" alt="image" style={{ marginRight: "12px" }} />
                                                        <span className="iq-fw-7 text-black iq-font-18">John Deo</span>
                                                    </a>
                                                    <ul className="d-inline-block float-right mb-3">
                                                        <li className="d-inline-block">
                                                            <a href="#"><i className="far fa-thumbs-up"></i> <span className="text-black iq-fw-7 iq-font-14">90</span></a>
                                                        </li>
                                                        <li className="d-inline-block ml-3" style={{ marginLeft: "12px" }}>
                                                            <a href="#"><i className="far fa-comment-alt"></i> <span className="text-black iq-fw-7 iq-font-14">120</span></a>
                                                        </li>
                                                    </ul>
                                                    <div className="clear-fix"></div>
                                                </div>
                                                <div className="blog-detail">
                                                    <a href="blog.html"><h4>The point of using Lorem Ipsum is that</h4></a>
                                                    <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog
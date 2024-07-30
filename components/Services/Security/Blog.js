import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const blogItems = [
    {
        id: 1,
        imgSrc: '/images/security-images/blog/blog-img1.jpg',
        title: 'Real World Incidents Detected and Stopped by Awake',
        description: 'Progravida nibh vel velit auctor alinean sollicitudin.',
        userImg: '/images/security-images/blog/clients/01.jpg',
        userName: 'John Deo',
        likes: 90,
        comments: 120
    },
    {
        id: 2,
        imgSrc: '/images/security-images/blog/blog-img2.jpg',
        title: 'The Advent of Advanced Network Traffic Analysis',
        description: 'Progravida nibh vel velit auctor alinean sollicitudin.',
        userImg: '/images/security-images/blog/clients/02.jpg',
        userName: 'Kips Leo',
        likes: 90,
        comments: 120
    },
    {
        id: 3,
        imgSrc: '/images/security-images/blog/blog-img3.jpg',
        title: 'EMA Top 3 Report and Decision Guide for Security',
        description: 'Progravida nibh vel velit auctor alinean sollicitudin.',
        userImg: '/images/security-images/blog/clients/03.jpg',
        userName: 'Glen Jax',
        likes: 90,
        comments: 120
    },
    {
        id: 4,
        imgSrc: '/images/security-images/blog/blog-img1.jpg',
        title: 'Real World Incidents Detected and Stopped by Awake',
        description: 'Progravida nibh vel velit auctor alinean sollicitudin.',
        userImg: '/images/security-images/blog/clients/04.jpg',
        userName: 'JD Scot',
        likes: 90,
        comments: 120
    },
    {
        id: 5,
        imgSrc: '/images/security-images/blog/blog-img2.jpg',
        title: 'The Advent of Advanced Network Traffic Analysis',
        description: 'Progravida nibh vel velit auctor alinean sollicitudin.',
        userImg: '/images/security-images/blog/clients/03.jpg',
        userName: 'Nils Leo',
        likes: 90,
        comments: 120
    }
];




const Blog = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section class="section iq-blogs position-relative">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="title-box">
                            <h2 class="title">Our Blog</h2>
                            <p class="sub-title">It is a long established fact that a reader will be distracted.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <Slider {...settings}>
                            {blogItems.map(item => (
                                <div className="item" key={item.id}>
                                    <div className="main-blog">
                                        <div className="blog-img">
                                            <img src={item.imgSrc} className="img-fluid" alt="image" />
                                        </div>
                                        <div className="blog-detail">
                                            <a href="blog-details-left-sidebar.html">
                                                <h6>{item.title}</h6>
                                            </a>
                                            <p className="mb-0">{item.description}</p>
                                            <div className="blog-info">
                                                <a href="#">
                                                    <img src={item.userImg} className="img-fluid rounded-circle mr-3 user-img" alt="image" />
                                                    <span className="iq-fw-8 font-c iq-font-18">{item.userName}</span>
                                                </a>
                                                <ul className="d-inline-block float-right">
                                                    <li className="d-inline-block">
                                                        <a href="#">
                                                            <i className="far fa-thumbs-up"></i> <span>{item.likes}</span>
                                                        </a>
                                                    </li>
                                                    <li className="d-inline-block">
                                                        <a href="#">
                                                            <i className="far fa-comment-alt"></i> <span>{item.comments}</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog
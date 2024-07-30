import React from 'react'

const Vision = () => {
  return (
    <section class="section our-services">
    <div class="container">
       <div class="row">
          <div class="col-lg-12">
             <div class="title-box">
                <h2 class="title">Computer Vizion AI</h2>
                <p class="sub-title">The point of using Lorem Ipsum</p>
             </div>
          </div>
       </div>
       <div class="row">
          <div class="col-lg-12">
             <div class="carousel slides">
                <div class="slideList">
                   <ul>
                      <li id="slide_1"><img src="/images/about2/05.jpg" class="img-fluid" alt="img" /></li>
                      <li id="slide_2"><img src="/images/about2/04.jpg" class="img-fluid" alt="img" /></li>
                      <li id="slide_3" class="active"><img src="/images/about2/06.jpg" class="img-fluid" alt="img" /></li>
                      <li id="slide_4"><img src="/images/about2/07.jpg" class="img-fluid" alt="img" /></li>
                   </ul>
                </div>
                <div class="carouselLinks">
                   <span class="object-img scan"></span>
                   <img src="/images/about2/02.png" class="img-fluid object-img" alt="img" />
                   <ul>
                      <li class="text-left object-new">
                         <a data-links-to="slide_1" class="one" href="#">
                            <h3 class="iq-fw-8">Object Detection</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                         </a>
                      </li>
                      <li class="object-new">
                         <a data-links-to="slide_2" class="one" href="#">
                            <h3 class="iq-fw-8">Video Analysis</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                         </a>
                      </li>
                      <li class="object-new selected">
                         <a data-links-to="slide_3" class="two" href="#">
                            <h3 class="iq-fw-8">Visual Search</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                         </a>
                      </li>
                      <li class="object-new">
                         <a data-links-to="slide_4" class="two" href="#">
                            <h3 class="iq-fw-8">Image Analysis</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                         </a>
                      </li>
                   </ul>
                </div>
             </div>
          </div>
       </div>
    </div>
 </section>
  )
}

export default Vision
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

export default function Banner() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    autoplay: true
  };

  return (
    <section className="wpo-hero-style-1">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col col-xl-4 col-lg-3 col-md-3 col-12">
            <div className="wpo-hero-left">
              <div className="wpo-hero-title-box">
                <div className="wpo-hero-title">
                  <h2>Hello I’m Nazeer Mohammed</h2>
                </div>
              </div>
              <div className="wpo-supporter">
                <div className="wpo-supporter-text">
                  <div className="content">
                    <h3>325+</h3>
                    <p>Happy Clients</p>
                  </div>
                </div>
                <div className="wpo-supporter-img">
                  <ul className="wpo-supporter-slide">
                    <Slider {...settings}>
                      <li>
                        <Image
                          alt="Web Development"
                          src={"/images/banner-slide1.jpg"}
                          width="50"
                          height="49"
                        />
                      </li>
                      <li>
                        <Image
                          alt="Web Development"
                          src={"/images/banner-slide2.jpg"}
                          width="50"
                          height="49"
                        />
                      </li>
                      <li>
                        <Image
                          alt="Web Development"
                          src={"/images/banner-slide3.png"}
                          width="50"
                          height="49"
                        />
                      </li>
                      <li>
                        <Image
                          alt="Web Development"
                          src={"/images/banner-slide4.png"}
                          width="50"
                          height="49"
                        />
                      </li>
                      <li>
                        <Image
                          alt="Web Development"
                          src={"/images/banner-slide5.png"}
                          width="50"
                          height="49"
                        />
                      </li>
                      <li>
                        <Image
                          alt="Web Development"
                          src={"/images/banner-slide1.jpg"}
                          width="50"
                          height="49"
                        />
                      </li>
                      <li>
                        <Image
                          alt="Web Development"
                          src={"/images/banner-slide2.jpg"}
                          width="50"
                          height="49"
                        />
                      </li>
                      <li>
                        <Image
                          alt="Web Development"
                          src={"/images/banner-slide3.png"}
                          width="50"
                          height="49"
                        />
                      </li>
                    </Slider>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
            <div className="wpo-hero-img">
             
              <Image alt="Nazz Studio" src={"/images/profile-pic1.jpg"} width="600" height="870"/>
              <div className="vector-1">
                <Image alt="Nazz Studio" src={"/images/pro1.svg"} width="33" height="38" />
              </div>
              <div className="vector-2">
                <Image alt="Nazz Studio" src={"/images/pro2.svg"} width="45" height="46" />
              </div>
              <div className="vector-3">
                <Image alt="Nazz Studio" src={"/images/pro3.svg"} width="98" height="40" />
              </div>
            </div>
          </div>
          <div className="col col-xl-4 col-lg-3 col-md-3 col-12">
            <div className="wpo-hero-right">
              <div className="experience">
                <div className="icon">
                  <span>6</span>
                </div>
                <div className="content">
                  <p>Years Of Experience</p>
                </div>
              </div>
              <div className="wpo-hero-title-box">
                <div className="wpo-hero-title">
                  <h2>A Creative Web Developer</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-1">
        <Image alt="Nazz Studio" src={"/images/shape1.svg"} width="68" height="118" />
      </div>
      <div className="shape-2">
        <Image alt="Naze Studio" src={"/images/shape2.svg"} width="68" height="118" />
      </div>
    </section>
  );
}

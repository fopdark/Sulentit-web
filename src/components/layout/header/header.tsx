import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PathStudy from "components/ui/pathStudy/pathStudy";
import AdsImage from "components/ui/adsImage/adsImage";

import "./header.scss";

const carousel1 = "/pictures/media_155246671173845.jpg";
const carousel2 = "/pictures/media_155246680133527.jpg";
const carousel3 = "/pictures/media_155246681644305.jpg";
const carousel4 = "/pictures/media_155246741041767.jpg";
const carouselMobi1 = "/pictures/carousel-master-layout.jpg";
const carouselMobi2 = "/pictures/carousel-master-layout-2.jpg";
const carouselMobi3 = "/pictures/carousel-master-layout-3.jpg";
const pictureLayout = "/pictures/beyound-layout.jpg";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplaySpeed: 3000,
  autoplay: true,
};

const ABC = () => <h1>abcd</h1>;
function Header(props: any) {
  return (
    <div className="group-header">
      <section className="position-relative header">
        <div className={props.isCarousel ? "d-block" : "d-none"}>
          <div className="d-none d-lg-block group-header__carousel">
            <Slider {...settings}>
              <img className="w-100 h-100" src={carousel1} alt="" />
              <img className="w-100 h-100" src={carousel2} alt="" />
              <img className="w-100 h-100" src={carousel3} alt="" />
              <img className="w-100 h-100" src={carousel4} alt="" />
            </Slider>
          </div>
          <div className="d-block d-lg-none group-header__carousel">
            <Slider {...settings}>
              <img className="w-100 h-100" src={carouselMobi1} alt="" />
              <img className="w-100 h-100" src={carouselMobi2} alt="" />
              <img className="w-100 h-100" src={carouselMobi3} alt="" />
            </Slider>
          </div>
        </div>

        <div className="position-relative">
          <div className={props.isCarousel ? "d-none" : "d-block"}>
            <div className="layout-picture">
              <img className="" src={pictureLayout} alt="" />
            </div>
            <h1 className="text-capitalize w-100 text-center position-absolute title-beyound">
              {props.title}
            </h1>
          </div>
        </div>
        <div className={props.isCarousel ? "d-block" : "d-none"}>
          <PathStudy></PathStudy>
          <AdsImage></AdsImage>
        </div>
      </section>
    </div>
  );
}

export default Header;

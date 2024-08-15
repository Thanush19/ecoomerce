import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Mainbanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="h-[40vh] overflow-hidden">
      <Slider {...settings}>
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/Launchpad_2024/Independence/hero/stripe/new/2/Saheli-hero-KV-3000x-1200-2x._CB567187851_.jpg"
            alt="image 2"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/Launchpad_2024/Independence/hero/stripe/Karigar-KV-3000x-1200-2x._CB566781497_.jpg"
            alt="image 3"
            className="w-full h-full object-contain"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Mainbanner;

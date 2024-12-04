import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Awards() {
  const settings = {
    className: "center",
    centerMode: true,
    focusOnSelect: true,
    // dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 500,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 775,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="bg-lightBg text-secondary h-[50vh] ">
      <h1 className="text-center text-2xl font-bold">INDUSTRY AWARDS</h1>

      <div className="pt-10 max-w-7xl mx-auto">
        <Slider {...settings}>
          <div>
            <img src="/awards-1.jpg" alt="" />
          </div>
          <div>
            <img src="/awards-2.jpg" alt="" />
          </div>
          <div>
            <img src="/awards-3.jpg" alt="" />
          </div>
          <div>
            <img src="/awards-4.jpg" alt="" />
          </div>
          <div>
            <img src="/awards-5.jpg" alt="" />
          </div>
          <div>
            <img src="/awards-6.jpg" alt="" />
          </div>
          <div>
            <img src="/awards-7.jpg" alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

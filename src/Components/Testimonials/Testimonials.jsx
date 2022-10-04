import React from "react";
import "./testimonials.css";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";

import "swiper/modules/pagination/pagination.min.css";
const data = [
  {
    avatar: avatar2,
    name: " Tina Snow ",
    review:
      " Modi alias animi dolorem aliquam ea eum beatae maiores , consectetur praesentium quibusdam , commodi velit porro blanditiis consequatur qui molestiae.Dolorem , perspiciatis aspernatur labore distinctio ratione delectus voluptatem doloresdeserunt explicabo nostrum ducimus quasi?",
  },
  {
    avatar: avatar1,
    name: " Shatta Wale ",
    review:
      " Modi alias animi dolorem aliquam ea eum beatae maiores , consectetur praesentium quibusdam , commodi velit porroblanditiis consequatur qui molestiae . Dolorem , perspiciatis aspernatur labore distinctio ratione delectus voluptatem doloresdeserunt explicabo nostrum ducimus quasi ? ",
  },
  {
    avatar: avatar1,
    name: " Kwame Despite ",
    review:
      " Modi alias animi dolorem aliquam ea cum beatae maiores , consectetur praesentium quibusdam , commodi velit porroblanditiis consequatur qui molestiae . Dolorem , perspiciatis aspernatur labore distinctio ratione delectus voluptatem doloresdeserunt explicabo nostrum ducimus quasi ? ",
  },
  {
    avatar: avatar2,
    name: " Nana Ama McBrown ",
    review:
      " Modi alias animi dolorem aliquam ea eum beatae maiores , consectetur praesentium quibusdam , commodi velit porroblanditiis consequatur qui molestiae . Dolorem , perspiciatis aspernatur labore distinctio ratione delectus voluptatem doloresdeserunt explicabo nostrum ducimus quasi ? ",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="avatar" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;

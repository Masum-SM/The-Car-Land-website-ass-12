import React, { useEffect, useState } from "react";
import Review from "../Review/Review";
import "./Reviews.css";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

const Reviews = () => {
  const [rewiews, setReviews] = useState([]);

  // const options = {
  //   loop: true,
  //   center: true,
  //   items: 3,
  //   margin: 0,
  //   autoplay: true,
  //   dots: true,
  //   autoplayTimeout: 8500,
  //   smartSpeed: 450,
  //   nav: false,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     600: {
  //       items: 3,
  //     },
  //     1000: {
  //       items: 3,
  //     },
  //   },
  // };

  useEffect(() => {
    fetch("https://peaceful-harbor-06339.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="container my-5">
      <h4 className="miniTitle text-center">Reviews</h4>
      <h2 className="car-2nd-title my-4">
        What Our <span>Clients</span> are Saying?
      </h2>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {rewiews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>

    // <section id="testimonial" className="testimonials pt-70 pb-70">
    //   <div className="container mt-5">
    //     <h4 className="miniTitle text-center">Reviews</h4>
    //     <div className="text-center ">
    //       <h3 className="sectionTitle">What Our Clients are Saying?</h3>
    //     </div>
    //     <p className="text-center ">
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //       eiusmod tempor incididunt ut labore et dolore magna.
    //     </p>
    //     <div className="row">
    //       <div className="col-md-12">
    //         <OwlCarousel
    //           id="customer-testimonoals"
    //           className="owl-carousel owl-theme"
    //           {...options}
    //         >
    //           {rewiews.map((review) => (
    //             <Review key={review._id} review={review}></Review>
    //           ))}
    //         </OwlCarousel>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Reviews;

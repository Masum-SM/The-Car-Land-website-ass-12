import React from "react";
import "./Review.css";
import Rating from "react-rating";

const Review = ({ review }) => {
  // console.log(review);
  const { name, email, des, rating } = review;
  return (
    <div className="col">
      <div className="card h-100 review-card  mb-3">
        <div className=" bg-transparent review-hd mt-4 ">
          <h4>{name}</h4>
          <h6>{email}</h6>
        </div>
        <div className="card-body">
          <p className="card-text review-des">{des}</p>
        </div>
        <div className="mb-4 bg-transparent">
          <small>Rating : </small>
          <Rating
            initialRating={rating}
            readonly
            placeholderRating={3.5}
            emptySymbol={<i className="far fa-star rating"></i>}
            placeholderSymbol={<i className="fas fa-star-half-alt rating"></i>}
            fullSymbol={<i className="fas fa-star rating"></i>}
          />
          <small>({rating})</small>
        </div>
      </div>
    </div>
  );
};

export default Review;

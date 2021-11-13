import React from "react";
import "./Review.css";
import Rating from "react-rating";

const Review = ({ review }) => {
  // console.log(review);
  const { name, email, des, rating } = review;
  return (
    <div className="col">
      <div className="card h-100 border-success mb-3">
        <div className="card-header bg-transparent border-success">
          <h2>{name}</h2>
          <h6>{email}</h6>
        </div>
        <div className="card-body text-success">
          <h5 className="card-title">Success card title</h5>
          <p className="card-text">{des}</p>
        </div>
        <div className="card-footer bg-transparent border-success">
          <Rating
            initialRating={rating}
            readonly
            placeholderRating={3.5}
            emptySymbol={<i className="far fa-star rating"></i>}
            placeholderSymbol={<i className="fas fa-star-half-alt rating"></i>}
            fullSymbol={<i className="fas fa-star rating"></i>}
          />
        </div>
      </div>
    </div>
  );
};

export default Review;

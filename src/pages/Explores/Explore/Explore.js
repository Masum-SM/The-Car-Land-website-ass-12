import React from "react";
import { Link } from "react-router-dom";
import "./Explore.css";

const Explore = ({ car }) => {
  const { _id, name, img, des, category, price, fuelType } = car;

  return (
    <div>
      <div className="col car-col">
        <div className="card h-100">
          <img src={img} className="card-img-top car-img" alt="..." />

          <div className="card-body">
            <h5 className="card-title car-title">{name}</h5>
            <p className="card-text car-des">{des}</p>
            <div>
              <small className="me-4">Category : {category}</small>

              <small>Fuel Type : {fuelType}</small>
            </div>
          </div>

          <div className="card-footer">
            <small className="car-cost">Price : {price}</small>
            <Link to={`/placeorder/${_id}`}>
              <button className="mb-3 booking-btn ms-3">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;

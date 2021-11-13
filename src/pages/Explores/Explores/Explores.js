import React, { useEffect, useState } from "react";
import Explore from "../Explore/Explore";
import "./Explores.css";

const Explores = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://peaceful-harbor-06339.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <div className="my-5">
      <h2 className="car-2nd-title">
        Welcome to <span className="wb-name">The car land</span>{" "}
      </h2>
      <h2 className="brand-title text-dark">FIND THE RIGHT CAR FOR YOU.</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 cars-container">
        {cars.map((car) => (
          <Explore key={car.id} car={car}></Explore>
        ))}
      </div>
    </div>
  );
};

export default Explores;

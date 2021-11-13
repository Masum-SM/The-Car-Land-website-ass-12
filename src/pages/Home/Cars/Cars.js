import React, { useEffect, useState } from "react";
import Car from "../Car/Car";
import "./Cars.css";

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://peaceful-harbor-06339.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => setCars(data.slice(0, 6)));
  }, []);

  return (
    <div id="cars" className="my-5">
      <div>
        <h2 className="brand-title mb-5">Choose Your Dream Car</h2>
      </div>
      <h2 className="car-2nd-title">
        Most recent <span>cars</span> for sale in Bangladesh
      </h2>

      <div className="row row-cols-1 row-cols-md-2 g-4 cars-container">
        {cars.map((car) => (
          <Car key={car.id} car={car}></Car>
        ))}
      </div>
    </div>
  );
};

export default Cars;

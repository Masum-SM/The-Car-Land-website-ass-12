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
    <div>
      <h2>This is Explore page</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 cars-container">
        {cars.map((car) => (
          <Explore key={car.id} car={car}></Explore>
        ))}
      </div>
    </div>
  );
};

export default Explores;

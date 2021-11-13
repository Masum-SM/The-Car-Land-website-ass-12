import React, { useEffect, useState } from "react";
import ManageCar from "../ManageCar/ManageCar";

const ManageCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://peaceful-harbor-06339.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  const handleDeleteCar = (id) => {
    const url = `https://peaceful-harbor-06339.herokuapp.com/cars/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.deletedCount) {
          alert("Do you want to delete?");
          const remaining = cars.filter((car) => car?._id !== id);
          setCars(remaining);
        }
      });
  };

  return (
    <div id="cars">
      <h2>
        Most recent cars for sale in <span> Bangladesh</span>
      </h2>

      <div className="row row-cols-1 row-cols-md-2 g-4 cars-container">
        {cars.map((car) => (
          <ManageCar
            key={car.id}
            car={car}
            handleDeleteCar={handleDeleteCar}
          ></ManageCar>
        ))}
      </div>
    </div>
  );
};

export default ManageCars;

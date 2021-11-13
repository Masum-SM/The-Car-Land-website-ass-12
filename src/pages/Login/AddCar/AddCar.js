import React from "react";
import "./Addcar.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddCar = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    axios
      .post("https://peaceful-harbor-06339.herokuapp.com/cars", data)
      .then((res) => {
        alert("Added successfully");
        reset();
      });
  };
  return (
    <div className="add-car-container my-5">
      <h2 className="car-2nd-title">
        Adding A New <span>car</span> To The Website.
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="addCar-form mt-5">
        <input {...register("img")} placeholder="Image Url" />
        <input
          {...register("name", { required: true, maxLength: 40 })}
          placeholder="Name"
        />
        <textarea
          className="addCar-text"
          {...register("des")}
          placeholder="Description"
        />
        <input type="text" {...register("category")} placeholder="category" />
        <input type="text" {...register("fuelType")} placeholder="fuelType" />
        <input type="text" {...register("price")} placeholder="Cost" />

        <input className="add-car-btn" type="submit" />
      </form>
    </div>
  );
};

export default AddCar;

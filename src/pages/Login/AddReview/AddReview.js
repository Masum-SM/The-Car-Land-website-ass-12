import React from "react";
import "./AddReview.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";

const AddReview = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
    // console.log(data);
    axios
      .post("https://peaceful-harbor-06339.herokuapp.com/reviews", data)
      .then((res) => {
        alert("Added successfully");
        reset();
      });
  };
  return (
    <div className="add-car">
      <h2>Please a add service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue={user.displayName}
          {...register("name", { required: true })}
        />
        {errors.userName && <span>This field is required</span>}
        <input
          defaultValue={user.email}
          {...register("email", { required: true })}
        />
        {errors.email && <span>This field is required</span>}

        <textarea {...register("des")} placeholder="Description" />
        <input
          //   type="formattedValue"
          type="number"
          {...register("rating")}
          placeholder="Rating"
          min="0"
          max="5"
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddReview;

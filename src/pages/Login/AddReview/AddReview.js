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
    <div className="add-car my-5">
      <h2 className="car-2nd-title">
        Welcome to <span className="wb-name"> The car land </span>{" "}
      </h2>

      <h2 className="car-2nd-title">
        Please Provide Your Valueable <span>Feedbacks.</span>
      </h2>
      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-md-5">
            {" "}
            <img
              className="w-100"
              src="https://i.ibb.co/VqzC61W/review0.png"
              alt=""
            />
          </div>

          <div className="col-12 col-md-7 review-form">
            <form onSubmit={handleSubmit(onSubmit)} className="review-input">
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

              <input className="form-btn" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;

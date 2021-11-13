import axios from "axios";
import React, { useEffect, useState } from "react";
import "./PlaceOrder.css";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";

const PlaceOrder = () => {
  const { id } = useParams();
  const [car, setCar] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://peaceful-harbor-06339.herokuapp.com/cars/${id}`)
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, []);

  const onSubmit = (data) => {
    const orderInfo = {
      ...data,
      ...car,
    };
    delete orderInfo._id;

    axios
      .post("https://peaceful-harbor-06339.herokuapp.com/orders", orderInfo)
      .then((res) => {
        alert("Added successfully");
        reset();
      })
      .then((result) => {
        if (result?.insertedId) {
          alert("Order processed successfully");

          reset();
        }
      });
  };

  return (
    <div className="w-75 mx-auto py-4">
      <div>
        <h2 className="brand-title mb-5">Welcome {user.displayName}</h2>
      </div>
      <div className='row row-cols-1 row-cols-md-2 g-4"'>
        <div className="col">
          <div className="card px-5">
            <img className="place-img" src={car.img} alt="" />
            <h4>{car.name}</h4>
            <p>
              <small>{car.des}</small>
            </p>
            <p>Cost : {car.price}</p>
          </div>
        </div>

        <div className=" col">
          <div className="card text-center place-form-container ">
            <h2 className="car-2nd-title my-3">
              Please Give Your <span>All Information</span>
            </h2>

            <form
              className="placeorder-form pt-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                defaultValue={user.displayName}
                {...register("userName", { required: true })}
              />
              {errors.userName && <span>This field is required</span>}
              <input
                defaultValue={user.email}
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}

              <input
                defaultValue="Pending"
                {...register("status", { required: true })}
              />

              {errors.status && <span>This field is required</span>}

              <input placeholder="Address" {...register("address")} />
              <input placeholder="City" {...register("city")} />
              <input placeholder="Phone Number" {...register("Phone")} />

              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;

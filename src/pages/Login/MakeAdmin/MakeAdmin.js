import React, { useState } from "react";
import "./MakeAdmin.css";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const handleOnBlur = (e) => {
    const inputText = e.target.value;
    setEmail(inputText);
  };

  const handleAdmin = (e) => {
    e.preventDefault();
    const user = { email };
    fetch("https://peaceful-harbor-06339.herokuapp.com/users", {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("Admin added succesfully");
          setEmail(" ");
        }
      });
  };
  return (
    <div className="container">
      <h2 className="car-2nd-title mt-5 mb-3">
        The <span>Car</span> Land
      </h2>
      <div>
        <h2 className="brand-title mb-5">Make an admin</h2>
      </div>
      <div className="row">
        <div className="col-12">
          <img
            className="w-25"
            src="https://i.ibb.co/XjvVdZQ/Admin.png"
            alt=""
          />
        </div>
        <div className="col-12  add-admin">
          <form className="admin-form" onSubmit={handleAdmin}>
            <input type="email" onBlur={handleOnBlur} placeholder="Email" />
            <button className="order-btn mb-5" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;

import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Register.css";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();

  const { registerUser } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLogin = (e) => {
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  return (
    <div className="container">
      <h2 className="car-2nd-title mt-4">
        Welcom to The <span>Car</span> Land
      </h2>
      <div className="row">
        <div className="col-12">
          <img
            className="signin-img"
            src="https://i.ibb.co/dmjvtxL/signup.png"
            alt=""
          />
        </div>
        <div className="col-12 login-form-container">
          <div>
            <h2 className="car-2nd-title">
              Please Give Your <span>Name</span> , <span>Email</span> &{" "}
              <span>Password</span>
            </h2>
            <div className="login-frm">
              <form onSubmit={handleLogin} className="login-input">
                <input
                  className="login-input-field"
                  type="text"
                  name="name"
                  onBlur={handleOnBlur}
                  placeholder="Name"
                />

                <input
                  className="login-input-field"
                  type="email"
                  name="email"
                  onBlur={handleOnBlur}
                  placeholder="Email"
                />

                <input
                  className="login-input-field"
                  type="password"
                  name="password"
                  onBlur={handleOnBlur}
                  placeholder="Password"
                />

                <button className="login-input-field my-4" type="submit">
                  Register
                </button>

                <p>
                  Alrady Registerd ? Please{" "}
                  <Link className="login-link-btn" to="login">
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

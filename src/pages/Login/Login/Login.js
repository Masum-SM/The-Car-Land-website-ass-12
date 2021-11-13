import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import "./Login.css";

import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { loginUser } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLogin = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
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
            className="login-img"
            src="https://i.ibb.co/y5ssFHB/login.png"
            alt=""
          />
        </div>

        <div className="col-12  login-form-container ">
          <h2 className="car-2nd-title">
            Please Give Your <span>Email</span> & <span>Password</span>
          </h2>
          <div className="login-frm">
            <form onSubmit={handleLogin} className="login-input">
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
                Login
              </button>

              <p>
                New User? Please{" "}
                <Link className="login-link-btn" to="register">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

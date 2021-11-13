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
    <div>
      <h2>Welcom to The Car Land</h2>
      <div>
        <form onSubmit={handleLogin} className="login-input">
          <input
            type="email"
            name="email"
            onBlur={handleOnBlur}
            placeholder="Email"
          />

          <input
            type="password"
            name="password"
            onBlur={handleOnBlur}
            placeholder="Password"
          />

          <button type="submit">Login</button>

          <p>
            New User? Please <Link to="register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

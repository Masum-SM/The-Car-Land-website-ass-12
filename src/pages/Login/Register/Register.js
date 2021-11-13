import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

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
    <div>
      <h2>Welcom to The Car Land</h2>
      <div>
        <form onSubmit={handleLogin} className="login-input">
          <input
            type="text"
            name="name"
            onBlur={handleOnBlur}
            placeholder="Name"
          />

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
            Alrady Registerd ? Please <Link to="login">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

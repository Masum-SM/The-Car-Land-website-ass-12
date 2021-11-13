import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
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
    <div>
      <h2>this is make admin page</h2>

      <form onSubmit={handleAdmin}>
        <input type="email" onBlur={handleOnBlur} placeholder="Email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MakeAdmin;

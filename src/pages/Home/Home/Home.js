import React from "react";
import Brand from "../Brand/Brand";
// import Header from "../../Shared/Header/Header";
import Carosel from "../Carosel/Carosel";
import Cars from "../Cars/Cars";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      {/* <Header></Header> */}
      <Carosel></Carosel>
      <Brand></Brand>
      <Cars></Cars>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;

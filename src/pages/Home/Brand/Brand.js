import React from "react";
import "./Brand.css";

const Brand = () => {
  return (
    <div className="container my-5">
      <div>
        <h2 className="brand-title mb-5">Choose Your Car By Brand Name</h2>
      </div>
      <div className="row row-cols-1 row-cols-md-5 g-4">
        <div className="col ">
          <div className="card brand-img ">
            <img src="https://i.ibb.co/T0fm88b/honda.png" alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card brand-img">
            <img src="https://i.ibb.co/c3tF1DT/suzuki.png" alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card brand-img">
            <img src="https://i.ibb.co/80n8cn4/bmw.png" alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card brand-img">
            <img src="https://i.ibb.co/Gt4vhHc/hyundai.png" alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card brand-img">
            <img src="https://i.ibb.co/Z1zzwPD/Nissan.png" alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card brand-img">
            <img src="https://i.ibb.co/9Nx4vPy/Scion.png" alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card brand-img">
            <img src="https://i.ibb.co/cT03BDj/tata.png" alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card brand-img">
            <img src="https://i.ibb.co/g6r6VnG/toyota.png" alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card brand-img">
            <img src="https://i.ibb.co/bRKfwdH/fordd.png" alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card brand-img">
            <img src="https://i.ibb.co/T4RfhGP/mini.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;

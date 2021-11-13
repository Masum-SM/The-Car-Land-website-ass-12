import React from "react";

const ManageCar = (props) => {
  const { name, img, des, category, price, _id } = props.car;
  const { handleDeleteCar } = props;
  //   const [status, setStatus] = useState("");

  return (
    <div className="col car-card">
      <div className="card h-100">
        <img src={img} className="card-img-top car-img" alt="..." />

        <div className="card-body">
          <h5 className="card-title car-title">{name}</h5>
          <p className="card-text car-des">{des}</p>
          <p>
            <small>Category : {category}</small>
          </p>
        </div>

        <div className="card-footer">
          <small className="car-cost">Price : {price}</small>
          {/* <button
            className="mb-3 bg-warning"
            onClick={() => {
              handleStatus(_id);
            }}
          >
            Book Now
          </button> */}

          <button
            className="mb-3 order-btn ms-3"
            onClick={() => {
              handleDeleteCar(_id);
            }}
          >
            <i className="fas fa-trash-alt"></i> Remove Car
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageCar;

import React from "react";

const MyOrder = ({ or, handleDeleteOrder }) => {
  const { _id, userName, email, status, name, img, price } = or;
  return (
    <div className="order-info">
      <div className="row">
        <div className="col-5">
          <img className="order-img me-2" src={img} alt="" />
          <p>Name : {userName}</p>
          <p>{email}</p>
        </div>
        <div className="col-7 mt-2">
          <h6>{name}</h6>
          <p>Price : {price}</p>
          <h5>Status : {status}</h5>
        </div>
      </div>
      <button
        className="log-icon my-1"
        onClick={() => {
          handleDeleteOrder(_id);
        }}
      >
        <i className="fas fa-trash-alt"></i> Remove Order
      </button>

      {/* <button
      className="log-icon my-1"
      onClick={() => {
        handleStatus(_id);
      }}
    >
      <i className="fas fa-clipboard-check"></i> comfirm Order
    </button> */}
    </div>
  );
};

export default MyOrder;

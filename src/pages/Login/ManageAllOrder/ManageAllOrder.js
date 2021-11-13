import React from "react";
import "./ManageAllOrder.css";

const ManageAllOrder = (props) => {
  const { _id, userName, email, status, name, img, price } = props.order;
  const { handleDeleteOrder } = props;

  const handleStatus = (id) => {
    const updateSataus = { status: "approved" };

    fetch(`https://peaceful-harbor-06339.herokuapp.com/orders/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateSataus),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Status updated.");
          // window.location.reload();
        }
      });
  };

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
        className="order-btn my-1 me-2"
        onClick={() => {
          handleDeleteOrder(_id);
        }}
      >
        <i className="fas fa-trash-alt"></i> Remove Order
      </button>

      <button
        className="order-btn my-1"
        onClick={() => {
          handleStatus(_id);
        }}
      >
        <i className="fas fa-clipboard-check"></i> comfirm Order
      </button>
    </div>
  );
};

export default ManageAllOrder;

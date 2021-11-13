import React, { useEffect, useState } from "react";
import ManageAllOrder from "../ManageAllOrder/ManageAllOrder";
import "./ManageAllOrders.css";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://peaceful-harbor-06339.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

  const handleDeleteOrder = (id) => {
    const url = `https://peaceful-harbor-06339.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.deletedCount) {
          alert("Do you want to delete?");
          const remaining = orders.filter((order) => order?._id !== id);
          setOrders(remaining);
        }
      });
  };
  return (
    <div>
      <h2 className="orders-title my-4">Manage All Orders</h2>
      {orders.map((order) => (
        <ManageAllOrder
          key={order.id}
          order={order}
          handleDeleteOrder={handleDeleteOrder}
        ></ManageAllOrder>
      ))}
    </div>
  );
};

export default ManageAllOrders;

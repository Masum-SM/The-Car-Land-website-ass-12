import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import MyOrder from "../MyOrder/MyOrder";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState([]);
  const { user } = useAuth();
  const email = user.email;

  useEffect(() => {
    fetch(`https://peaceful-harbor-06339.herokuapp.com/orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  useEffect(() => {
    const foundMyOrder = orders.filter((order) => order.email == email);
    setOrder(foundMyOrder);
  }, [order]);

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
      <h2>This is my Order :</h2>
      {order.map((or) => (
        <MyOrder
          key={or._id}
          or={or}
          handleDeleteOrder={handleDeleteOrder}
        ></MyOrder>
      ))}
    </div>
  );
};

export default MyOrders;

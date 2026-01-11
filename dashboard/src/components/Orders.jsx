import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import "../App";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/allOrders")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
      });
  }, []);

  return (
    <div className="orders">
      {orders.length > 0 ? (
        <div className="orders-table-container">
          <h3 className="title">Your Orders ({orders.length})</h3>

          <table className="orders-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Avg. Price</th>
                <th>Mode</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  {/* Assuming you might want a timestamp later,
                      or use order.createdAt if your schema has it.
                      For now, hardcoded or omitted */}
                  <td>{new Date().toLocaleDateString()}</td>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>{order.price}</td>
                  <td className={order.mode === "BUY" ? "buy" : "sell"}>
                    {order.mode}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      )}
    </div>
  );
};

export default Orders;

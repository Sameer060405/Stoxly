import React, { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    axios
      .get("http://localhost:3003/allOrders", {
        withCredentials: true // Include cookies in request
      })
      .then((res) => {
        if (!mounted) return;
        setOrders(res.data || []);
      })
      .catch((err) => {
        console.error("Failed to fetch orders", err);
        if (mounted) setOrders([]);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => (mounted = false);
  }, []);

  return (
    <>
      <h3 className="title">Orders ({orders.length})</h3>

      {loading ? (
        <div className="no-orders">Loading orders…</div>
      ) : orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders yet.</p>
          <button className="btn">Get started</button>
        </div>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Mode</th>
                <th>Placed at</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o, i) => (
                <tr key={o._id || i}>
                  <td>{o.name}</td>
                  <td>{o.qty}</td>
                  <td>{Number(o.price).toFixed(2)}</td>
                  <td>{o.mode}</td>
                  <td>{o.createdAt ? new Date(o.createdAt).toLocaleString() : '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Orders;

import React, { useState, useEffect } from "react";
import { positions } from "../data/data"
import axios from "axios";
//connection of backend and frontend to fetch data from the database
const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3003/allPositions", {
      withCredentials: true // Include cookies in request
    })
    .then((res) => {
      console.log(res.data);
      setAllPositions(res.data);
    })
    .catch((error) => {
      console.error("Error fetching positions:", error);
      // Set empty array on error to prevent crashes
      setAllPositions([]);
    });
  }, []);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {allPositions.map((stock, index) => {
            const curValue = (Number(stock.price) || 0) * (Number(stock.qty) || 0);
            const isProfit = curValue - stock.avgCost * stock.qty >= 0.0;
            const profClass = isProfit ? "Profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "Profit";

            return (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{(Number(stock.avgCost) || 0).toFixed(2)}</td>
                <td>{(Number(stock.price) || 0).toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - (Number(stock.avgCost) || 0) * (Number(stock.qty) || 0)).toFixed(2)}
                </td>

                <td className={dayClass}>{stock.day}</td>
              </tr>



            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;

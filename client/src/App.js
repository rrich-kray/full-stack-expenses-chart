import React, { useEffect, useState } from "react";
import "./App.css";
import data from "./data";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

function App() {
  const [expenseData, setExpenseData] = useState([]);
  const colors = [
    "hsl(25, 47%, 15%)",
    "hsl(28, 10%, 53%)",
    "hsl(27, 66%, 92%)",
    "hsl(33, 100%, 98%)",
    "hsl(10, 79%, 65%)",
    "hsl(186, 34%, 60%)",
  ];

  useEffect(() => {
    fetch("http://localhost:3001/expenses-chart/api/expense", {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setExpenseData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(expenseData);

  return (
    <div className="app">
      <div className="content-wrapper">
        <div className="info-bar">
          <div className="info-container">
            <span>My Balance</span>
            <span>$921.48</span>
          </div>
          <div className="logo-container">
            <img src={require("./images/logo.svg").default} alt="logo" />
          </div>
        </div>
        <div className="main-container">
          <div className="chart-container">
            <ResponsiveContainer height="100%" width="100%">
              <BarChart
                height="100%"
                width="100%"
                data={expenseData}
                margin={{ top: 10, bottom: 10, left: 10, right: 10 }}
              >
                <XAxis datakey="name" axisLine={false} ticks={false} />
                {/* <YAxis datakey="amount" /> */}
                <Tooltip />
                <Bar
                  dataKey="value"
                  fill="rgb(228, 98, 28)"
                  radius={[10, 10, 10, 10]}
                ></Bar>
                {/* <Bar datakey="uv" fill="#82ca9d" /> */}
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="footer-container">
            <div className="monthly-spend footer-section">
              <span>Total this month</span>
              <span>$478.33</span>
            </div>
            <div className="MoM-change footer-section">
              <span>+2.7%</span>
              <span>From last month</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

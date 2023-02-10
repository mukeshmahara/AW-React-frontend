import React from "react";
import "chart.js/auto";
import { Chart, Doughnut, Pie, PolarArea, Radar } from "react-chartjs-2";

function Dashboard() {
  const lineData = {
    labels: ["Jun", "Jul", "Aug",'sept','oct'],
    datasets: [
      {
        id: 1,
        label: "profit",
        data: [25, 16, 17,15,24,22,11,48],
      },
      {
        id: 2,
        label: "loss",
        data: [33, 20, 19,7,10,25,38,40],
      },
    ],
  };
  return (
    <div className="my-4">
      <div className="my-4 ">
        <p className="mx-4 mb-2 text-5xl text-indigo-400">Dashboard</p>

        <hr />
      </div>

      <div className="mx-2 my-3 cursor-pointer card justify-text hover:bg-gray-50">
        <Chart type="line" data={lineData} />
      </div>

      <div className="mx-2 my-3 cursor-pointer card justify-text hover:bg-gray-50">
        <Chart type="bar" data={lineData} />
      </div>

      <div className="mx-2 my-3 cursor-pointer card justify-text hover:bg-gray-50">
        <Pie data={lineData} />
      </div>
      <div className="mx-2 my-3 cursor-pointer card justify-text hover:bg-gray-50">
        <Doughnut data={lineData} />
      </div>
      <div className="mx-2 my-3 cursor-pointer card justify-text hover:bg-gray-50">
        <PolarArea data={lineData} />
      </div>
      <div className="mx-2 my-3 cursor-pointer card justify-text hover:bg-gray-50">
        <Radar data={lineData} />
      </div>
    </div>
  );
}

export default Dashboard;

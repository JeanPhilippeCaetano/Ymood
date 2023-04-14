import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart({ chartData }) {
  return (
    <div className="chart-container" style={{width:1000+"px", height: 1000+"px" }}>
      <h2 style={{ textAlign: "center" }}>Ymood</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Ymood in Ynov"
            }
          }
        }}
      />
    </div>
  );
}
export default BarChart;
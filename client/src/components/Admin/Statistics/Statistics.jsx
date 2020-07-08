import React from "react";
import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from "recharts";
import "./style.scss";

const Statistics = ({ users }) => {
  return (
    <div className="statistics">
      <h3>Статистика</h3>
      <LineChart
        width={1000}
        height={200}
        data={users}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line
          type="monotone"
          dataKey="address.geo.lat"
          stroke="#ff7300"
          yAxisId={0}
        />
        <Line
          type="monotone"
          dataKey="address.zipcode[0]"
          stroke="#999"
          yAxisId={1}
        />
        <Line
          type="monotone"
          dataKey="address.zipcode[1]"
          stroke="red"
          yAxisId={2}
        />
      </LineChart>
    </div>
  );
};

export default Statistics;

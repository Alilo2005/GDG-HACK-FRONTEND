import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", members: 100, contributions: 50 },
  { month: "Feb", members: 150, contributions: 80 },
  { month: "Mar", members: 200, contributions: 100 },
  { month: "Apr", members: 250, contributions: 120 },
  { month: "May", members: 230, contributions: 110 },
  { month: "Jun", members: 260, contributions: 140 },
  { month: "Jul", members: 270, contributions: 130 },
];

export const GraphArea = () => (
  <ResponsiveContainer width="100%" height={200}>
    <LineChart data={data}>
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="members" stroke="#007BFF" />
      <Line type="monotone" dataKey="contributions" stroke="#28A745" />
    </LineChart>
  </ResponsiveContainer>
);

import React from "react";
import { 
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend, Area 
} from "recharts";

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
  <div className="bg-background p-4 rounded-2xl shadow-md">
    <h2 className="text-lg font-bold mb-2 text-text_black">Total Members | Contributions</h2>
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        {/* Grid for readability */}
        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />

        {/* X and Y Axes Styling */}
        <XAxis dataKey="month" tick={{ fill: "#4B5563" }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: "#4B5563" }} axisLine={false} tickLine={false} />

        {/* Tooltip for insights */}
        <Tooltip
          contentStyle={{
            backgroundColor: "rgba(0,0,0,0.75)",
            color: "#fff",
            borderRadius: "6px",
          }}
          cursor={{ stroke: "#6B7280", strokeWidth: 1 }}
        />

        {/* Legend for clarity */}
        <Legend verticalAlign="top" height={30} iconType="circle" />

        {/* Green shaded area under the line */}
        <defs>
          <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0D9D58" stopOpacity={0.4} />
            <stop offset="100%" stopColor="#0D9D58" stopOpacity={0} />
          </linearGradient>
        </defs>

        {/* Area for shaded effect */}
        <Area type="monotone" dataKey="contributions" stroke="none" fill="url(#greenGradient)" />

        {/* Smooth green line */}
        <Line 
          type="monotone" 
          dataKey="contributions" 
          stroke="#0D9D58" 
          strokeWidth={3} 
          dot={{ r: 4, fill: "#0D9D58" }} 
          activeDot={{ r: 6, fill: "#0D9D58", stroke: "#0D9D58" }} 
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

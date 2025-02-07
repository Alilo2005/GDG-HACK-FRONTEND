import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

interface BarChartProps {
  title: string;
  data: { name: string; value: number }[];
}

const BarChartComponent: React.FC<BarChartProps> = ({ title, data }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-2 text-text_black">{title}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          {/* Subtle Grid for Structure */}
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} vertical={false} />

          {/* X and Y Axes Styling */}
          <XAxis 
            dataKey="name" 
            tick={{ fill: "#4B5563" }} 
            axisLine={false} 
            tickLine={false} 
          />
          <YAxis 
            tick={{ fill: "#4B5563" }} 
            axisLine={false} 
            tickLine={false} 
          />

          {/* Tooltip for insights */}
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(0,0,0,0.75)",
              color: "#fff",
              borderRadius: "6px",
            }}
            cursor={{ fill: "rgba(0,0,0,0.1)" }}
          />

          {/* Define the Gradient for the Bars */}
          <defs>
            <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity={0.2} />
            </linearGradient>
          </defs>

          {/* Bar with Gradient and Rounded Corners */}
          <Bar
            dataKey="value"
            fill="url(#blueGradient)"
            radius={[4, 4, 0, 0]} // Rounded top corners
            barSize={30} // Adjust bar width
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface PieChartProps {
  title: string;
  data: { name: string; value: number }[];
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];

const PieChartComponent: React.FC<PieChartProps> = ({ title, data }) => {
  return (
    <div
      className="bg-white p-4 rounded-lg shadow-md"
      aria-label={`${title} Pie Chart`}
    >
      <h2 className="text-lg font-bold mb-2 text-left">{title}</h2> {/* Left-align title */}
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="40%" // Adjust chart position to leave space for legend
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(1)}%`
            }
          >
            {data.map((entry, index) => (
              <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
  contentStyle={{
    backgroundColor: "rgba(70,70,70,0.75)", // Dark background
    color: "#9CA3AF", // Gray text
    borderRadius: "6px",
  }}
  cursor={{ stroke: "#6B7280", strokeWidth: 1 }}
/>

          <Legend layout="vertical" align="right" verticalAlign="middle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;

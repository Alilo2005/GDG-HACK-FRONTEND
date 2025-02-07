import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

interface BarChartProps {
  title: string;
  data: { name: string; value: number }[];
}


const BarChartComponent: React.FC<BarChartProps> = ({ title, data }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip />
          <Bar
            dataKey="value"
            radius={[4, 4, 0, 0]} // Rounded top corners
            barSize={30} // Adjust bar width
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
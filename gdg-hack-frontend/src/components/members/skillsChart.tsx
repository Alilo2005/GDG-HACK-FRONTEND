// "use client"
// import { PieChart, Pie, Cell, Legend } from 'recharts';

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
// // components/members/skillsChart.tsx

// interface SkillsChartProps  {
//   skills: string[];
// };





// const data = [
//   { name: 'Express', value: 52.1 },
//   { name: 'React', value: 22.8 },
//   { name: 'UI UX', value: 13.9 },
//   { name: 'Other', value: 11.2 },
// ];

// export const SkillsChart: React.FC = () => (
//   <PieChart width={300} height={300}>
//     <Pie
//       data={data}
//       dataKey="value"
//       nameKey="name"
//       cx="50%"
//       cy="50%"
//       outerRadius={80}
//       fill="#8884d8"
//       label
//     >
//       {skills.map((skill, index) => (
//         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//       ))}
//     </Pie>
//     <Legend />
//   </PieChart>
// );



import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

interface SkillsChartProps {
  skills: string[];
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export const SkillsChart: React.FC<SkillsChartProps> = ({ skills }) => {
  const data = skills.map((skill, index) => ({
    name: skill,
    value: 1, // Assuming each skill has equal weight
  }));

  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
    </PieChart>
  );
};
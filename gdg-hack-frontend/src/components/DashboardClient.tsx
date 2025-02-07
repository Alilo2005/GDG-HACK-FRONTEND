'use client';

import React from 'react';
import StatCard from './StatCard';
import BarChartComponent from './BarChartComponent';
import PieChartComponent from './PieChartComponent';
import ContributorsTable from './ContributorsTable';
import { BarChart3, Users, CheckCircle, TrendingUp } from 'lucide-react';
import { GraphArea } from './GraphArea';

const statData = [
  { title: 'Active Members', value: '7,265', icon: <Users />, bgColor: 'bg-blue-500' },
  { title: 'Contributions', value: '3,671', icon: <TrendingUp />, bgColor: 'bg-green-500' },
  { title: 'New Skills Gained', value: '15', icon: <CheckCircle />, bgColor: 'bg-yellow-500' },
  { title: 'Active Users', value: '2,318', icon: <BarChart3 />, bgColor: 'bg-red-500' }
];

const skillsData = [
  { name: 'Backend', value: 200, fill: '#4F46E5' },
  { name: 'Frontend', value: 300, fill: '#22C55E' },
  { name: 'Security', value: 400 ,  fill: '#F59E0B' },
  { name: 'Design', value: 250 ,  fill: '#EC4899' },
  { name: 'Other', value: 150,   }
];

const technologiesData = [
  { name: 'Express', value: 52.5 },
  { name: 'React', value: 22.2 },
  { name: 'UI/UX', value: 13.9 },
  { name: 'Other', value: 11.3 }
];

const contributors = [
  {
    name: "Alice Johnson",
    discordId: "alice#1234",
    department: ["dev", "design"],
    score: 95,
  },
  {
    name: "Bob Smith",
    discordId: "bob#5678",
    department: ["logistics"],
    score: 88,
  },
  {
    name: "Charlie Brown",
    discordId: "charlie#9101",
    department: ["communication", "dev"],
    score: 92,
  },
  {
    name: "Diana Prince",
    discordId: "diana#1121",
    department: ["design"],
    score: 85,
  },
  {
    name: "Eve Adams",
    discordId: "eve#3141",
    department: ["logistics", "communication"],
    score: 90,
  },
];

export default function Dashboard() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        {statData.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
      <div className="mb-6">
        <GraphArea />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
        <BarChartComponent title="Skills Filed" data={skillsData} />
        <PieChartComponent title="Technologies Used" data={technologiesData} />
      </div>
      <div className="mb-6">
        <ContributorsTable contributors={contributors} />
      </div>
    </div>
  );
}
'use client';

import React from 'react';
import StatCard from '../components/StatCard';
import BarChartComponent from './BarChartComponent';
import PieChartComponent from './PieChartComponent';
import ContributorsTable from '../components/ContributorsTable';
import { BarChart3, Users, CheckCircle, TrendingUp } from 'lucide-react';

const statData = [
  { title: 'Active Members', value: '7,265', icon: <Users />, bgColor: 'bg-blue-500' },
  { title: 'Contributions', value: '3,671', icon: <TrendingUp />, bgColor: 'bg-green-500' },
  { title: 'New Skills Gained', value: '15', icon: <CheckCircle />, bgColor: 'bg-yellow-500' },
  { title: 'Active Users', value: '2,318', icon: <BarChart3 />, bgColor: 'bg-red-500' }
];

const skillsData = [
  { name: 'Backend', value: 200 },
  { name: 'Frontend', value: 300 },
  { name: 'Security', value: 400 },
  { name: 'Design', value: 250 },
  { name: 'Other', value: 150 }
];

const technologiesData = [
  { name: 'Express', value: 52.5 },
  { name: 'React', value: 22.2 },
  { name: 'UI/UX', value: 13.9 },
  { name: 'Other', value: 11.3 }
];

const contributors = [
  { name: 'John Doe', department: ['Dev', 'Design'], score: 150 },
  { name: 'John Doe', department: ['Design'], score: 75 },
  { name: 'John Doe', department: ['Logistics'], score: 60 },
  { name: 'John Doe', department: ['Design', 'Communication'], score: 45 },
  { name: 'John Doe', department: ['Logistics'], score: 30 }
];

export default function Dashboard() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        {statData.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
        <BarChartComponent title="Skills Filed" data={skillsData} />
        <PieChartComponent title="Technologies Used" data={technologiesData} />
      </div>

      <ContributorsTable contributors={contributors} />
    </div>
  );
}

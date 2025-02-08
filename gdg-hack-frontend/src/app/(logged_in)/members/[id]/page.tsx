// // // import React from "react";
// // // import { memberMockData } from "../../../../mockData/member";

// // // interface MemberDetailsProps {
// // //   params: {
// // //     id: string;
// // //   };
// // // }

// // // const MemberDetailsPage: React.FC<MemberDetailsProps> = ({ params }) => {
// // //   const member = memberMockData.find((member) => member.id === params.id);

// // //   if (!member) {
// // //     return <div>Member not found!</div>;
// // //   }

// // //   return (
// // //     <div>
// // //       <h1>Member Details</h1>
// // //       <p>Name: {member.full_name}</p>
// // //       <p>Discord ID: {member.discord_id}</p>
// // //     </div>
// // //   );
// // // };

// // // export default MemberDetailsPage;


// // // components/Layout.tsx
// // import { Card } from '../../../components/members/card';
// // import { SkillsChart } from '../../../components/members/skillsChart';
// // import { DataTable } from '../../../components/members/DataTable';

// // export const Layout: React.FC = () => {
// //   const rows = [
// //     { question: 'John Doe', mentee: 'dID John Doe', department: 'design', createdAt: '11-02-2025 02:30:00', closedAt: '11-02-2025 02:30:00' },
// //     // Add more rows as needed
// //   ];

// //   return (
// //     <div className="p-6 bg-gray-100 min-h-screen">
// //       <h1 className="text-2xl font-bold mb-6">User 001</h1>
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //         <Card discordId="John Doe" department="JohnDoe@esi.dz" role="member" score={12} contributions={5} />
// //         <SkillsChart />
// //       </div>
// //       <div className="mt-6">
// //         <DataTable rows={rows} />
// //       </div>
// //     </div>
// //   );
// // };
// // "use client"
// // import React from 'react';
// // import { useRouter } from 'next/router'; // Import useRouter
// // import { Card } from '../../../components/members/card';
// // import { SkillsChart } from '../../../components/members/skillsChart';
// // import { DataTable } from '../../../components/members/DataTable';

// // // Sample mock data
// // const mockData = {
// //   '001': {
// //     discordId: 'John Doe',
// //     department: 'design@esi.dz',
// //     role: 'member',
// //     score: 12,
// //     contributions: 5,
// //     rows: [
// //       { question: 'What is React?', mentee: 'John Doe', department: 'design', createdAt: '11-02-2025 02:30:00', closedAt: '11-02-2025 03:00:00' },
// //     ],
// //   },
// //   '002': {
// //     discordId: 'Jane Smith',
// //     department: 'development@esi.dz',
// //     role: 'admin',
// //     score: 20,
// //     contributions: 10,
// //     rows: [
// //       { question: 'What is TypeScript?', mentee: 'Jane Smith', department: 'development', createdAt: '10-02-2025 01:30:00', closedAt: '10-02-2025 02:00:00' },
// //     ],
// //   },
// // };

// // export const Layout: React.FC = () => {
// //   const router = useRouter(); // Use useRouter hook
// //   const { id } = router.query; // Extract "id" from the route

// //   // Check if id is available and fetch user data
// //   const user = id && mockData[id as string];

// //   if (!user) {
// //     return <div className="p-6 bg-gray-100 min-h-screen">User not found!</div>;
// //   }

// //   return (
// //     <div className="p-6 bg-gray-100 min-h-screen">
// //       <h1 className="text-2xl font-bold mb-6">User {id}</h1>
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //         {/* Card Component */}
// //         <Card
// //           discordId={user.discordId}
// //           department={user.department}
// //           role={user.role}
// //           score={user.score}
// //           contributions={user.contributions}
// //         />
// //         {/* Skills Chart */}
// //         <SkillsChart />
// //       </div>
// //       <div className="mt-6">
// //         {/* Data Table */}
// //         <DataTable rows={user.rows} />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Layout;


// // "use client";

// // import React from 'react';
// // import { useSearchParams } from 'next/navigation'; // Use the App Router's search params hook
// // import { Card } from '../../../components/members/card';
// // import { SkillsChart } from '../../../components/members/skillsChart';
// // import { DataTable } from '../../../components/members/DataTable';



// // import { MembersData } from "@/app/types";

// // export const memberMockData: MembersData[] = [
// //     { id: '001', full_name: "John Dou 001", discord_id: "001", departement:["dep1","dep2"], skills:["dep1","dep2"] ,score : 14 },
// //     { id: '002', full_name: "John Dou 002", discord_id: "001", departement:["dep1","dep2"] ,skills:["dep1","dep2"] , score : 14 },
// //     { id: '003', full_name: "John Dou 003", discord_id: "001", departement:["dep1","dep2"], skills:["dep1","dep2"] ,score : 14 },
// //     { id: '004', full_name: "John Dou 004", discord_id: "001", departement:["dep1","dep2"], skills:["dep1","dep2"] ,score : 14  },
// //     { id: '005', full_name: "John Dou 005", discord_id: "001", departement:["dep1","dep2"] ,skills:["dep1","dep2"] , score : 14 },
// //     { id: '006', full_name: "John Dou 006", discord_id: "001", departement:["dep1","dep2"], skills:["dep1","dep2"] ,score : 14 },
// //     { id: '007', full_name: "John Dou 007", discord_id: "001", departement:["dep1","dep2"] ,skills:["dep1","dep2"] , score : 14 },
// //     { id: '008', full_name: "John Dou 008", discord_id: "001", departement:["dep1","dep2"], skills:["dep1","dep2"] ,score : 14  },
// //     { id: '009', full_name: "John Dou 009", discord_id: "001", departement:["dep1","dep2"] ,skills:["dep1","dep2"] , score : 14 },
// //   ];
  


// // // type UserData = {
// // //   discordId: string;
// // //   department: string;
// // //   role: string;
// // //   score: number;
// // //   contributions: number;
// // //   rows: {
// // //     question: string;
// // //     mentee: string;
// // //     department: string;
// // //     createdAt: string;
// // //     closedAt: string;
// // //   }[];
// // // };

// // // Sample mock data
// // // const mockData = [
// // //   {  id:'001',
// // //   discordId: 'John Doe',
// // //   department: 'design@esi.dz',
// // //   role: 'member',
// // //   score: 12,
// // //   contributions: 5,
// // //   rows: [
// // //     { question: 'What is React?', mentee: 'John Doe', department: 'design', createdAt: '11-02-2025 02:30:00', closedAt: '11-02-2025 03:00:00' },
// // //   ],},

// // // ]
  
  
// // const MemberDetailsPage: React.FC = () => {
// //   const searchParams = useSearchParams();
// //   const id = searchParams.get('id');

// //   if (!id) {
// //     return <div>User not found!</div>;
// //   }

// //   const user = mockData[id as keyof typeof mockData];

// //   if (!user) {
// //     return <div>User not found!</div>;
// //   }

// //   return (
// //     <div className="p-6 bg-gray-100 min-h-screen">
// //       <h1 className="text-2xl font-bold mb-6">User {id}</h1>
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //         <Card
// //           discordId={user}
// //           department={user.department}
// //           role={user.role}
// //           score={user.score}
// //           contributions={user.contributions}
// //         />
// //         <SkillsChart />
// //       </div>
// //       <div className="mt-6">
// //         <DataTable rows={user.rows} />
// //       </div>
// //     </div>
// //   );
// // };

// // export default MemberDetailsPage;



"use client";
import React from "react";
import { memberMockData } from "../../../../mockData/member";
import  Card  from "../../../../components/members/card"; // Import the Card component
import { SkillsChart } from "../../../../components/members/skillsChart"; // Import the SkillsChart component
import { DataTable } from '../../../../components/members/DataTable';
interface MemberDetailsProps {
  params: {
    id: string;
  };
}



const MemberDetailsPage: React.FC<MemberDetailsProps> = ({ params }) => {
  // Find the member by ID
  const member = memberMockData.find((member) => member.id === params.id);
  // const member = memberMockData.find((member) => member.id === params.id);
  // Handle the case where the member is not found
  if (!member) {
    return <div>Member not found!</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Member Details</h1>

      
      {/* Grid layout for Card and SkillsChart */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card Component */}
        <Card
          discordId={member.discord_id}
          department={member.departement.join(", ")} // Convert array to string
          role="member" // You can update this if roles are dynamic
          score={member.score ?? 0}
          contributions={member.rows ? member.rows.length : 0} // Use rows length as contributions
        />

        {/* SkillsChart Component */}
        <SkillsChart skills={member.skills ?? []} /> {/* Pass skills data */}
      </div>

      {/* DataTable (if needed) */}
      {member.rows && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">Contributions</h2>
          <DataTable rows={member.rows} /> {/* Pass rows data */}
        </div>
      )}
    </div>
  );
};

export default MemberDetailsPage;
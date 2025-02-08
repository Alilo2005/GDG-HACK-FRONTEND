// // // components/Card.tsx
// // interface CardProps {
// //     discordId: string;
// //     department: string;
// //     role: string;
// //     score: number;
// //     contributions: number;
// //   }
  
// //   export const Card: React.FC<CardProps> = ({ discordId, department, role, score, contributions }) => (
// //     <div className="p-4 bg-white rounded-2xl shadow-md">
// //       <h2 className="text-lg font-bold mb-4">Discord Id: {discordId}</h2>
// //       <p>Department: {department}</p>
// //       <p>Role: {role}</p>
// //       <p>Score: {score}</p>
// //       <p>Contributions: {contributions}</p>
// //     </div>
// //   );
  

// interface CardProps  {
//   discordId: string;
//   department: string;
//   role: string;
//   score: number;
//   contributions: number;
// };

// const Card: React.FC<CardProps> = ({ discordId, department, role, score, contributions }) => {
//   return (
//     <div className="p-4 bg-white shadow-md rounded-lg">
//       <h2 className="text-xl font-bold">{discordId}</h2>
//       <p>Department: {department}</p>
//       <p>Role: {role}</p>
//       <p>Score: {score}</p>
//       <p>Contributions: {contributions}</p>
//     </div>
//   );
// };

// export default Card;


// components/members/card.tsx

type CardProps = {
    discordId: string;
    department: string;
    role: string;
    score: number;
    contributions: number;
  };
  
  const Card: React.FC<CardProps> = ({ discordId, department, role, score, contributions }) => {
    return (
      <div className="p-4 bg-white shadow-md rounded-lg">
        <p><strong>Discord ID:</strong> {discordId}</p>
        <p><strong>Department:</strong> {department}</p>
        <p><strong>Role:</strong> {role}</p>
        <p><strong>Score:</strong> {score}</p>
        <p><strong>Contributions:</strong> {contributions}</p>
      </div>
    );
  };
  
  export default Card;
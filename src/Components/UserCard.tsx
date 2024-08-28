import React from "react";

interface UseCardProps {
  name: string;
  age: number;
  occupation: string;
}

const UserCard: React.FC<UseCardProps> = ({ name, age, occupation }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Occupation: {occupation}</p>
    </div>
  );
};

export default UserCard;

import React from 'react';
import {useNavigate} from "react-router-dom";

interface DepartmentCardProps {
  department: string;
  onClick: (department: string) => void;
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({ department, onClick }) => {
  return (
    <div className=" bg-blue-800 duration-200 hover:shadow-red-500
    hover:scale-105 hover:bg-blue-600 p-4 hover:text-black
     rounded-lg shadow-lg h-28 cursor-pointer" onClick={() => onClick(department)}>
      <h2 className="text-2xl mt-5 text-center font-semibold ">{department}</h2>
    </div>
  );
};

const departments: string[] = ['Computer Science', 'Electrical Engineering',
 'Mechanical Engineering', 'Civil Engineering', 'EnC Engineering', 
 'Aeronautical Engineering'];

const Landing: React.FC = () => {
  const navigate= useNavigate();
  const handleDepartmentClick = () => {
    // Handle department click event
    
  // Navigate to '/Semester' with the selected department as a parameter
  navigate(`/Semester/`);
  };

  return (
    <div className=' mt-20'>
      <h1 className="text-4xl  text-center font-bold mb-4 text-red-700 shadow-glow">Select your Department</h1>
      <div className="grid  m-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((department, index) => (
          <DepartmentCard key={index} department={department} onClick={handleDepartmentClick} />
        ))}
      </div>
    </div>
  );
};

export default Landing;
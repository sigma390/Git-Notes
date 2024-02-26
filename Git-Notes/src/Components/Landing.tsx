import React from 'react';

interface DepartmentCardProps {
  department: string;
  onClick: (department: string) => void;
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({ department, onClick }) => {
  return (
    <div className="bg-blue-700 duration-200 hover:shadow-purple-600 hover:scale-105 hover:bg-blue-600 p-4 rounded-lg shadow-md cursor-pointer" onClick={() => onClick(department)}>
      <h2 className="text-xl font-semibold">{department}</h2>
    </div>
  );
};

const departments: string[] = ['Computer Science', 'Electrical Engineering', 'Mechanical Engineering', 'Civil Engineering', 'Chemical Engineering', 'Biomedical Engineering'];

const Landing: React.FC = () => {
  const handleDepartmentClick = (department: string) => {
    // Handle department click event
    console.log(`Selected department: ${department}`);
  };

  return (
    <div className='mt-10'>
      <h1 className="text-2xl  text-center font-bold mb-4 text-red-700 shadow-glow">Select your Department</h1>
      <div className="grid m-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {departments.map((department, index) => (
          <DepartmentCard key={index} department={department} onClick={handleDepartmentClick} />
        ))}
      </div>
    </div>
  );
};

export default Landing;
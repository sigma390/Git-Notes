import React from 'react';

import {useNavigate} from "react-router-dom";
import { SemesterCard } from './SemesterCard';



const Semesters: React.FC = () => {
    const navigate = useNavigate();
  // Array to hold semesters from 1 to 8
  // Function to handle click on semester
  const handleSemesterClick = (semester: number) => {
    // Handle semester click event
    console.log(`Selected semester: ${semester}`);
    // Navigate to '/Semester' with the selected semester as a parameter
    navigate(`/Semester/${semester}`);
  };

  return (
    <div className='mt-10'>
      <h2>Semesters</h2>
      {/* Map through semesters array to render clickable elements */}
      <h1 className="text-4xl text-center font-bold mb-4 text-red-700 shadow-glow">Select Semester</h1>
      <div className="grid m-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Generating Semester Cards */}
        {Array.from({ length: 8 }, (_, index) => index + 1).map((semester, index) => (
          <SemesterCard key={index} semester={semester} onClick={handleSemesterClick} />
        ))}
      </div>
    </div>
  );
};

export default Semesters;

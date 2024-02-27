import React from 'react'


export const  SemesterCard: React.FC<{ semester: number; onClick: (semester: number) => void }> = ({ semester, onClick }) => {
    return (
      <div className="bg-green-800 duration-200 hover:shadow-red-500 hover:scale-105 hover:bg-green-600 p-4 hover:text-black rounded-lg shadow-lg h-28 cursor-pointer" onClick={() => onClick(semester)}>
        <h2 className="text-2xl mt-5 text-center font-semibold">Semester {semester}</h2>
      </div>
    );
  };
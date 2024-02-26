import React from 'react';



type AppBarProps = {
    image:string,
    alt:string
}


const AppBar: React.FC<AppBarProps> = ({ image, alt }) => {
    return (
      <div className="flex justify-between items-center  px-4 py-2 bg-[#B91C1C] shadow-lg shadow-[#B91C1C] h-24">
        <img
          src={image}
          alt={alt}
          className="w-16 h-16 rounded-full hover:scale-125 duration-200"
        />
        <h1  className="flex justify-center text-white text-5xl font-bold text-shadow flex-grow text-center">
          Git Notes<span><img src="/src/assets/pngwing.com.png" alt="" className='h-16 w-16' /></span>
        </h1>
        <div className="w-10 h-10"></div>{/* Placeholder for other content if needed */}
      </div>
    );
  };
  
  export default AppBar;
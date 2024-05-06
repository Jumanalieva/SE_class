import React from 'react';
import backgroundImage from '../assets/images/open-black.jpeg';
// import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
      
      <div className="text-center p-10">
        <h1 className="text-4xl md:text-5xl font-bold  text-gray-300 drop-shadow-md">
          BE A PART OF GREAT LIBRARY
        </h1><br/>
        <p className="text-xl text-gray-300 mt-4">
          COMPREHENSIVE COLLECTIONS OF BOOKS
        </p>
        <p className="text-xl text-gray-300 mt-4">
          PENNED BY RENOWNED AUTHORS & EDUCATORS
         </p>
         <p className="text-xl text-gray-300 mt-4">
          TO ENHACE YOUR LEARNING JOURNEY...
          </p>
      </div>
    </div>
  ); 
};

export default Home;


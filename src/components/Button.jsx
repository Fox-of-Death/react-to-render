import React from 'react';
import { Link } from 'react-router-dom';

const Button = () => {
  return (
    <>
      <Link 
        to="/course" 
        className="px-6 py-3 bg-blue-800 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        Cat Photo
      </Link>
    </>
  );
};

export default Button;
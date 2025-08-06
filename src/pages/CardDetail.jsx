import React from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import allCardData from '../services/courseData';

const CardDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const card = allCardData.find((item) => item.id === parseInt(id));

  if (!card) {
    return <Navigate to="*" replace />;
  }

  const imageAltText = `An image related to the topic of: ${card.title}`;

  return (
    <>
      <main className='flex-grow min-h-screen bg-white'>
        <div className='container mx-auto py-10 px-4'>
          <div className='md:flex md:flex-row rounded-lg shadow-lg overflow-hidden'>
            <div className='w-full md:w-1/2 h-120'>
              <img src={card.imageUrl} alt={imageAltText} />
            </div>
            <div className='md:w-1/2 w-full p-6 flex flex-col'>
              <h1 className='text-4xl font-bold text-blue-800 mb-4'>{card.title}</h1>
              <p className='text-gray-700 text-2xl leading-relaxed'>{card.description}</p>
            </div>
          </div>
          <button
            onClick={() => navigate(-1)}
            className='mt-8 px-6 py-3 bg-blue-800 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300'>
            Go Back
          </button>
        </div>
      </main>
    </>
  );
};

export default CardDetail;
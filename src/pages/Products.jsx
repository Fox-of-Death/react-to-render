import React from 'react';
import CardList from '../components/CardList';
import Footer from './../components/Footer';
import ErrorMessage from '../components/ErrorMessage';
import courseData from './../services/courseData';
const Products = () => {
  if (!Array.isArray(courseData)) {
    return <ErrorMessage message="Data format is incorrect. Expected an array." />;
  }

  if (courseData.length === 0) {
    return <ErrorMessage message="No cards to display." />;
  }

  return (
    <>
      <section className="bg-white py-8 min-h-screen">
        <main className="container mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Cat List</h1>
          <hr className="border-t-4 border-gray-300 mb-8 w-full" />
          <CardList cardData={courseData} />
        </main>
      </section>
    </>
  );
};

export default Products;

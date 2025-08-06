import React from 'react'
import CardList from '../components/CardList'
import courseData from '../services/courseData';

const Course = () => {
  if (!Array.isArray(courseData)) {
    return <ErrorMessage message="Data format is incorrect. Expected an array." />;
  }
  if (courseData.length === 0) {
    return <ErrorMessage message="No cards to display." />;
  }

  return (
    <>
      <main className='flex-grow'>
        <div className='container mx-auto my-8 p-4'>
          <CardList cardData={courseData} />
        </div>
      </main>
    </>
  )
}

export default Course
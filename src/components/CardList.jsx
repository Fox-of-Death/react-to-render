import React from 'react'
import courseData from '../services/courseData'
import Card from './Card'

const CardList = () => {
    return (
        <>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4'>
                {courseData.map(card => (
                    <Card
                        key={card.id}
                        title={card.title}
                        duration={card.duration}
                        description={card.description}
                        price={card.price}
                        imageUrl={card.imageUrl}
                    />
                ))}
            </div>
        </>
    )
}

export default CardList
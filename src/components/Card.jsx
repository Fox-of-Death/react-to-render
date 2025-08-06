import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <>
            <Link to={`/card_detail/${props.id}`}>
                <div className='flex flex-col h-full rounded-md overflow-hidden shadow-lg bg-gray-150 transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer'>
                    <img className='w-full h-60 object-cover' src={props.imageUrl} alt={props.title} />
                    <div className='px-6 py-4'>
                        <h2 className='font-bold text-xl mb-1'>{props.title}</h2>
                        <p className='text-gray-700 text-base mb-1'>
                            Amount Day: {props.duration}
                        </p>
                        <p className='text-black text-lg font-bold'>
                            Price {props.price} $
                        </p>
                    </div>
                </div>
            </Link>
        </>

    )
}

export default Card
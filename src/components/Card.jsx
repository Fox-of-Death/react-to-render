import React from 'react'

const Card = (props) => {
    return (
        <>
            <div className='rounded-md overflow-hidden shadow-lg bg-white'>
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
        </>
    )
}

export default Card
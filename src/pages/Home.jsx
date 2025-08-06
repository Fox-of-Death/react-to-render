import React from 'react'
import bgImage from '../assets/img/2025_04_17_08_27_04_3182364.png'

const Home = () => {
    return (
        <>
            <section className='h-screen bg-cover bg-center flex items-center justify-between text-white' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='container mx-auto p-4'>
                    <h2 className='text-5xl font-bold mb-4 text-white'>Welcome to World Cat</h2>
                    <p className='text-white mb-6 text-lg font-semibold'>Recommend</p>
                </div>
            </section>
        </>
    )
}

export default Home
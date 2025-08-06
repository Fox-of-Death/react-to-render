import React from 'react'
import bgImage from '../img/2025_04_17_08_27_04_3182364.png';

const Home = () => {
    return (
        <>
            <section className='h-screen bg-cover bg-center flex items-center justify-between text-white' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='container mx-auto p-4'>
                    <h2 className='text-5xl font-bold mb-4 text-blue-950'>Hello World</h2>
                    <p className='text-black mb-6 text-lg font-semibold'>Welcome to Server</p>
                </div>
            </section>
        </>
    )
}

export default Home
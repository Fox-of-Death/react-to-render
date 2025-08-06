import React from 'react'

const Home = () => {
    return (
        <>
            <section className='h-screen bg-cover bg-center flex items-center justify-between text-white' style={{ backgroundImage: 'url(https://images.pexels.com/photos/7983589/pexels-photo-7983589.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='container mx-auto p-4'>
                    <h2 className='text-5xl font-bold mb-4 text-blue-950'>NVC Training Center</h2>
                    <p className='text-black mb-6 text-lg font-semibold'>Here We go again?</p>
                </div>
            </section>
        </>
    )
}

export default Home
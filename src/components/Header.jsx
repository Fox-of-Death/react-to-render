import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menuItems = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Cat Photo', link: '/course' },
        { name: 'Contact', link: '/contact' }
    ]

    return (
        <>
            <header className='bg-blue-800 text-white p-4'>
                <div className='container mx-auto py-2'>
                    <div className='flex item-center justify-between'>
                        <div className='flex items-center'>
                            <h1 className='text-2xl font-bold'>Cat</h1>
                        </div>

                        {/* Hamburger Icon */}
                        <button className='block lg:hidden cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'} text-3xl`}></i>
                        </button>

                        {/* Desktop Navigation Menu */}
                        <nav className='hidden lg:flex items-center space-x-8'>
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.link}
                                    className='text-lg hover:text-gray-300 transition-all duration-300 font-semibold hover:underline'
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile Navigation Menu */}
                        <nav className={`lg:hidden absolute left-0 top-0 w-2/3 bg-purple-950 text-white h-full ${isMenuOpen ? 'block' : 'hidden'} z-50`}>
                            <div className='p-4'>
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.link}
                                        className='block text-lg py-2 hover:text-gray-300 transition-all duration-300 font-semibold hover:underline'
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Course from './pages/Course'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <>
      <Router>
        <div className='flex flex-col min-h-screen'>
          <Header/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/course' element={<Course/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
          <Footer/>
        </div>
      </Router>
    </>
  )
}

export default App
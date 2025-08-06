import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Home from './pages/Home'
import Header from './components/Header'
import CardDetail from './pages/CardDetail'
import Course from './pages/Course'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import About from './pages/About';

const App = () => {
  return (
    <>
      <Router>
        <div className='flex flex-col min-h-screen'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/course' element={<Course />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/card_detail/:id' element={<CardDetail />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
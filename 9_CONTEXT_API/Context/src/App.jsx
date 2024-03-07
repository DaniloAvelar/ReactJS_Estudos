import { useState } from 'react'

// 1 - Config React Router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//Components
import Navbar from './Components/Navbar';

//Pages
import Home from './Views/Home';
import About from './Views/About';
import Contact from './Views/Contact';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <h1>React Context API</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

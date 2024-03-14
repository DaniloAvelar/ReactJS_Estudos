import { useState } from 'react'
import './App.css'

//Router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

//Pages
import Home from './Pages/Home/Home'
import About from './Pages/Abaout/About'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'

// 1 - Config React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

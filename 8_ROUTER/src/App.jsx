import './App.css'

// 1 - Config React Router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//Components
import Navbar from "./components/Navbar";
import {SearchForm} from './components/SearchForm';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Search from './pages/Search';


function App() {

  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='/products/:id/info' element={<Info />} />
          <Route path='/search' element={<Search />} />
          <Route path='*' element={<NotFound />} />
          {/* Redirecionamento de rotas */}
          <Route path="/company" element={<Navigate to="/about" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

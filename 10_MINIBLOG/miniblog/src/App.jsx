import { useState, useEffect } from 'react'
import './App.css'
import { onAuthStateChanged } from 'firebase/auth'

//Hooks
import { useAuthentication } from './Hooks/useAuthentication'

//Router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

//Context
import { AuthProvider } from './Contex/AuthContex'

//Pages
import Home from './Pages/Home/Home'
import About from './Pages/Abaout/About'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import CreatePost from './Pages/CreatePost/CreatePost'
import Dashboard from './Pages/Dashboard/Dashboard'

function App() {

  //Variavel de Estado do Usuario
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();
  //Atribuindo o valor undefined ao usuario, para que nao exiba nada enquanto tiver carregando
  const loadingUser = user === undefined;

  //Monitorando o AUTH(autenticação), toda vez que tiver alteração ele executa
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth]);


  if (loadingUser) {
    return (<p>Carregando ...</p>)
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
              <Route path="/register" element={!user ?  <Register /> : <Navigate to="/" /> } />
              <Route path="/posts/create" element={user ?  <CreatePost /> : <Navigate to="/login" /> } />
              <Route path="/dashboard" element={user ?  <Dashboard /> : <Navigate to="/login" /> } />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App

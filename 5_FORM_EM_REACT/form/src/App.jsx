import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyForm from "./components/MyForm"
import EditForm from "./components/EditForm"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>Participe da promoção</h3>
      <MyForm />
      <hr />
      {/* Sempre passar em formato de OBJ */}
      <EditForm user={{nome:"Danilo", email:"danilo@teste.com", celular:"984654875"}} />
    </>
  )
}

export default App

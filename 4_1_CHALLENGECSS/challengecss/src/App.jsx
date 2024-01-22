import { useState } from 'react'
import './App.css'
import CarDetails from './components/CarDetails'

function App() {

  const cars = [
    {id: 1, marca: "Hyundai" , modelo: "Azera" , motor: "3.3 - V6" , cor:"Prata" , ano: 2008 , valor: 38000},
    {id: 2, marca: "Chevrolet" , modelo: "Camaro" , motor:"6.2 - V8" , cor:"Amarelo" , ano:2018 , valor: 139000},
    {id: 3, marca: "Ferrari" , modelo: "458" , motor:"4.5 - V8" , cor:"Vermelho" , ano:2015 , valor: 480000},
    {id: 4, marca: "Audi" , modelo:"R8" , motor:"5.2 - V10" , cor:"Azul" , ano:2019 , valor: 780000},
  ]

  return (
    <>
      <h1>Detalhes dos Carros</h1>
      <hr />
      {cars.map((car) => (
      <CarDetails
        key={car.id}
        marca={car.marca}
        modelo={car.modelo}
        motor={car.motor}
        cor={car.cor}
        ano={car.ano}
        valor={car.valor}
      />
      ))}
    </>
  )
}

export default App

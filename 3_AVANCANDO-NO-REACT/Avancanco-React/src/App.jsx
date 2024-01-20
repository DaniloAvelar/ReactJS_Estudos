import { useState } from 'react'
import './App.css'
import City from './assets/city.jpg'
import ManageData from './components/ManageData'
import SumAndSub from './components/SumAndSub'
import ListData from './components/ListData'
import ConditionalData from './components/ConditionalData'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import MotoDetail from './components/MotoDetail'
import ImovelDetail from './components/ImovelDetail'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'
import UserDetails from './components/UserDetails'


function App() {
  const [count, setCount] = useState(0)

  const [userName] = useState("Danilo");

  //Model do Carro
  const carData = {
    marca:"Hyundai",
    modelo:"Azera 3.3 - V6",
    ano:[2009],
    cor:"Prata",
    kms:[97000]
  };

  //Model Imóveis

  const imoveis = [
    {id: 1, tipo: "Casa", metros: 200, localidade: "Ribeirão Preto", valor: 400000},
    {id: 2, tipo: "Casa", metros: 250, localidade: "Bonfim Paulista", valor: 48000},
    {id: 3, tipo: "Apartamento", metros: 80, localidade: "Ribeirão Preto", valor: 280000},
    {id: 4, tipo: "Apartamento", metros: 110, localidade: "Ribeirão Preto", valor:360000}
  ];

  function shoeMessage() {
    console.log("Evento do componente Pai");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  //Desafio 4 ********************************
   const users = [
     {id: 1, nome: "Danilo", idade: 37, profissao: "Desenvolvedor"},
     {id: 2, nome: "Joaquim", idade: 31, profissao: "Marcineiro"},
     {id: 3, nome: "Jhenifer", idade: 16, profissao: "Manicure"},
     {id: 4, nome: "Bruna", idade: 22, profissao: "Estudante"},
  ];

  
  return (
    <>
      <h1>Avançando no React</h1>
      {/* Imagem em Public */}
      <div>
        <img src="/public/img1.jpg" alt="Paisagem" />
      </div>
      <br />
      {/* Imagem em asset */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <hr></hr>
      <div>
        <ManageData />
      </div>
      <hr />
      <div>
        <SumAndSub />
      </div>
      <hr />
      <div>
        <ListData />
      </div>
      <hr />
      <div>
        <ConditionalData />
      </div>
      <hr />
      <div>
        <ShowUserName name={userName} />
      </div>
      <div>
        <CarDetails carData={carData}/>
      </div>
      <div>
        <MotoDetail moto="CBR 500 R" cor="Branca" ano="2014"/>
      </div>
      <div>
        {imoveis.map((imovel) => (
          <ImovelDetail 
            key={imovel.id}
            tipo={imovel.tipo}
            metros={imovel.metros}
            localidade={imovel.localidade}
            valor={imovel.valor} 
          />
        ))}
      </div>
      <div>
        <Container>
          <p>Esse conteúdo esta é um *children* e está dentro do elemente Pai (Container)</p>
        </Container>
        <Container>
          <p>Esse é um conteúdo de reaproveitamento, reaproveitando um jsx para imprimir coisas distintas</p>
        </Container>
      </div>
      <div>
        <ExecuteFunction myFuncition={shoeMessage}/>
      </div>
      <div>
        <Message msg={message}/>
        <ChangeMessage handleMessage={handleMessage}/>
      </div>
      <hr />
      <div>
      <h3>.: Desafio 4 :.</h3>
        <h4>Saiba se você já pode tirar sua carteira de habilitação:</h4>      
          {users.map((user) => (
            <UserDetails 
              key={user.id}
              nome={user.nome}
              idade={user.idade}
              profissao={user.profissao} 
            />
          ))}
      </div>
    </>
  )
}

export default App

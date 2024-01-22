import { useState } from "react";
import "./CarDetails.modules.css";
const CarDetails = ({id, marca, modelo, motor, cor, ano, valor }) => {
 
  //Função que troca a cor da Div, dependendo da cor do carro
    function getTypeColor(cor){
      switch(cor){
        case 'Prata': return '#b0b0b0';break;
        case 'Vermelho': return '#f50505';break;
        case 'Amarelo': return '#f5dd05';break;
        case 'Azul': return '#054df5';break;
        default: return '#FFF'
      }
    }

    //Função que concatena a imagem com o diretorio

    const dir = "./public/";

    function getModeloCar(modelo){
        switch(modelo){
            case 'Azera': return 'azera.png';break;
            case '458': return 'ferrari.png';break;
            case 'Camaro': return 'camaro.png';break;
            case 'R8': return 'audi.png';break;
            default: return ''
        }
    }
  
  return (
    <div className="gridContainer">
        <div className="container">
            <img src={getModeloCar(modelo)} alt="Carro Semi-novo" />
        </div>
        <div className="container">
            <p key={id}>
            <b>Marca: </b>{marca}<br />
            <b>Modelo: </b>{modelo}<br />
            <b>Motor: </b>{motor}<br />
            <b>Cor: </b>{cor}<br />
            {<div className="divColor" style={{ backgroundColor: getTypeColor(cor)}}></div>}
            <b>Ano: </b>{ano}<br />
            <b>R$: </b>{valor}<br /><br />
            </p>
        </div>
    </div>
  )
}

export default CarDetails
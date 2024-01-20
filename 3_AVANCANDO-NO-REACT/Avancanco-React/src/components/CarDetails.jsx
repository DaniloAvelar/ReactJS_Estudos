
//Aqui eu passei a PROPS inteira, mas para simplificar podemos descontruir como no exemplo MotoDetail
const CarDetails = (props) => {
  return (
    //Exemplo [ 1 ]
    <div>
        <h3>Descontruindo a (props)</h3>
        <p>Marca: {props.carData.marca} </p>
        <p>Modelo: {props.carData.modelo} </p>
        <p>Ano: {props.carData.ano} </p>
        <p>Cor: {props.carData.cor} </p>
        <p>Kms: {props.carData.kms} </p>
    </div>
  )
}

export default CarDetails
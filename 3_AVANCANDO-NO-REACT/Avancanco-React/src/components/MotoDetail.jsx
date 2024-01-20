

const MotoDetail = ({moto, cor, ano}) => {
  return (
     //Exemplo [ 2 ]
     <div>
        <h3>Descontruindo a (props) 2</h3>
        <p>Modelo: {moto} </p>
        <p>Cor: {cor} </p>
        <p>Ano: {ano} </p>
    </div>
  )
}

export default MotoDetail
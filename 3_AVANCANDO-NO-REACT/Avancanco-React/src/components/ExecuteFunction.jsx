

const ExecuteFunction = ({myFuncition}) => {
  return (
    <>
        <h3>Executando Função do elemento pai, com o botão no elemento filho</h3>
        <button onClick={myFuncition}>Clique para ativar a função</button>
    </>
  )
}

export default ExecuteFunction
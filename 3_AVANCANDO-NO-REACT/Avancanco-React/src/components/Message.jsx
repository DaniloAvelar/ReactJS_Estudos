

const Message = ({msg}) => {
  return (
    <>  
        <h3>Elemento Pai com 2 filhos: State lift</h3>
        <p>Um rece a mensagem e exibe na tela</p>
        <p>O outro seta a mesnagem, (troca a mesagem) com setMessage</p>
        <h5>A mensagem é: {msg}</h5> 
    </>
  )
}

export default Message
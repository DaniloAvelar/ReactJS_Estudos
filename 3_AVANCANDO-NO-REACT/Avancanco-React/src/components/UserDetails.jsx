
const UserDetails = ({nome, idade, profissao}) => {

  return (
    <>
        <h3>{nome}</h3>
        <p>Job: {profissao}</p>
        <p>{idade} Anos</p>
        {/* logica para maiores de 18 anos */}
        {idade >= 18 ? (<h4>Você já pode dirigir</h4>) : (<h4>Oops. Você ainda NÃO pode dirigir!</h4>)}
        <hr/>
    </>
  )
}

export default UserDetails
import { useState } from "react"
import "./MyForm.Modules.css"

const EditForm = ({user}) => {

    //Passando o OBJ da chamada da tela, para o useState como padrão
    //Condicional no State sempre é boa prática para ja tratar o retorno
    const[nome, setNome] = useState(user ? user.nome : "");
    const[email, setEmail] = useState(user ? user.email : "");
    const[celular, setCelular] = useState(user ? user.celular : "");


  return (
    <>
        <h5>Edite seu cadastro, e mantenha seus dados sempre atualizados!</h5>
        <hr />
        <br />
        {/*Form sempre será enviado com a TAG event.preventDefault() para, assim nao recarrega a tela*/}
        <form>
            <div>
                <label htmlFor="nome">Nome: </label>
                <input type="text" name="nome" placeholder="Digite seu nome" value={nome} />
            </div>
            <label>
                <span>Email:</span> 
                <input type="text" name="email" placeholder="Digite seu email" value={email} />
            </label>
            <label>
                <span>Celular:</span> 
                <input type="text" name="celular" placeholder="Digite seu celular" value={celular} />
            </label>
            <div>
                <input type="submit" value="Atualizar dados cadastrais!" />
            </div>
        </form>
    </>
  )
}

export default EditForm
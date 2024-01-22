import { useState } from "react"
import "./MyForm.Modules.css"

const MyForm = () => {

    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [celular, setCelular] = useState();
    const [descricao, setDesc] = useState();
    const [sexo, setSexo] = useState();

    //Função recebe o (E) evento que acessa o .target.value, pegando o valor do campo digitado atraves de um onChange.
   const handleName = (e) => { 
        setNome(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleCelular = (e) => {
        setCelular(e.target.value)
    }

    const handleDesc = (e) => {
        setDesc(e.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(nome,email,celular,descricao,sexo);

        //Limpando os campos do Formulário
        setNome("");
        setEmail("");
        setCelular("");
        setDesc("");
        setSexo("");
    }

  return (
    <>
        <h5>Preencha com seus dado e concorra a prêmios !!!</h5>
        <hr />
        <br />
        {/*Form sempre será enviado com a TAG event.preventDefault() para, assim nao recarrega a tela*/}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nome">Nome: </label>
                <input type="text" name="nome" placeholder="Digite seu nome" onChange={handleName} value={nome}/>
            </div>
            <label>
                <span>Email:</span> 
                <input type="text" name="email" placeholder="Digite seu email" onChange={handleEmail} value={email}/>
            </label>
            <label>
                <span>Celular:</span> 
                <input type="text" name="celular" placeholder="Digite seu celular" onChange={handleCelular} value={celular}/>
            </label>
            <label>
                <span>Deixe sua mensagem</span>
                <textarea name="msg" placeholder="Descrição do usuário" onChange={handleDesc} value={descricao}></textarea>
            </label>
            <label>
                <span>Sexo</span>
                <select name="sexo" onChange={(e) => setSexo(e.target.value)}>
                    <option value="e">Escolha uma opção</option>
                    <option value="m">Masculino</option>
                    <option value="f">Feminino</option>
                    <option value="o">Outros</option>
                </select>
            </label>
            <div>
                <input type="submit" value="Participar da promoção"/>
            </div>
        </form>
    </>
  )
}

export default MyForm
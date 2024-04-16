import styles from './Register.module.css'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import {useAuthentication} from '../../Hooks/useAuthentication';

const Register = () => {

  const navigate = useNavigate();

  //Contole das states dos campos
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  //Envio do Formulário
  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("");

    //objeto do usuario POST
    //Nao necessita Ex: displayname = displayname, pois o nome ja é igual ao componente imput text

    const user = {
      displayName,
      email,
      password
    }

    //Se password foi diferente do Confirme Password
    if (password !== confirmPassword) {
      setError("As senhas são diferentes!")
      return
    }

    const res = await createUser(user);

    //Criação do usuário
    console.log(res);

    if(res){
      navigate("/login")
    }

  };

  useEffect(()=> {
    if(authError){
      setError(authError);
    }
  },[authError])

  return (
    <div className={styles.register}>
      <h2>Cadastre-se para criar posts</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            placeholder='Nome do usuário'
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Email:</span>
          <input
            type="text"
            name="email"
            placeholder='Email usuário'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            placeholder='Insira sua senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Confirme sua Senha:</span>
          <input
            type="password"
            name="confirmPassword"
            placeholder='Confirme a sua senha'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        {!loading && <button className='btn'>Cadastrar</button>}
        {loading && <button className='btn' disabled>Aguarde ...</button>}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  )
}

export default Register
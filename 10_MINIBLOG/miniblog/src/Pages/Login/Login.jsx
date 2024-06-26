import styles from './Login.module.css'

import { useState, useEffect } from 'react'

import { useAuthentication } from '../../Hooks/useAuthentication';

const Login = () => {
  //Contole das states dos campos
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, error: authError, loading } = useAuthentication();

  //Envio do Formulário
  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("");

    const user = {
      email,
      password
    }

    const res = await login(user);

    //Criação do usuário
    console.log(res);

  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError])

  return (
    <div className={styles.login}>
      <h2>Entrar</h2>
      <p>Faça o login para utilizar o sistema!</p>
      <form onSubmit={handleSubmit}>
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
        <button className='btn'>Login</button>
        {/* {!loading && <button className='btn'>Cadastrar</button>} */}
        {/* {loading && <button className='btn' disabled>Aguarde ...</button>}*/}
        {error && <p className="error">{error}</p>} 
      </form>
    </div>
  )
}

export default Login
// import { useContext } from 'react';
// import { CounterContext }  from '../ContextApp/CounterContext';
import ChangeCounter from '../Components/ChangeCounter';

//Refatorando o Context
import { useCounterContext } from '../Hooks/useCounterContex';
import { useTitleColorContext } from '../Hooks/useTitleColorContext';


const Home = () => {
  //Usando o CounterContext
  //const { counter } = useContext(CounterContext);

  const {counter} = useCounterContext();

  //Recebendo a Propriedade 'color' do Reducer
  const {color, dispatch} = useTitleColorContext();

  /*
  Alterando o state complexo com a função 
  setTitleColor passando uma (cor) como parametro
  */
  const setTitleColor = (color) => {
    //Action type, ou tipo da ação é nesse caso, = type= color
    dispatch({ type: color });
  }

  return (
    <div>
      <h2 style={{ color: color }}>
        Home
      </h2>
      <h4>Valor do contador é: {counter}</h4>
      <ChangeCounter />
      {/* Criando a chamada do setTitleColor com um botão */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  )
}

export default Home
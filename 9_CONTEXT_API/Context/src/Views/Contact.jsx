// import { useContext } from 'react';
// import { CounterContext }  from '../ContextApp/CounterContext';
import ChangeCounter from '../Components/ChangeCounter';

//Refatorando o Context
import { useCounterContext } from '../Hooks/useCounterContex';
import { useTitleColorContext } from '../Hooks/useTitleColorContext';

const Contact = () => {
  //const { counter } = useContext(CounterContext);
  const {counter} = useCounterContext();

  //Recebendo a Propriedade 'color' do Reducer
  const {color, dispatch} = useTitleColorContext();

  return (
    <div>
      <h2 style={{ color: color }}>
        Contact
      </h2>
      <h4>Valor do contador é: {counter}</h4>
    </div>
  )
}

export default Contact
import { useContext } from "react";
import { CounterContext } from "../ContextApp/CounterContext";


const ChangeCounter = () => {
    //Trazendo os valor para alterar o valor do contador
    const { counter, setCounter } = useContext(CounterContext);


  return (
    <div>
        <button onClick={() => setCounter(counter + 1)}>
            Add value to counter
        </button>
    </div>
  )
}

export default ChangeCounter;
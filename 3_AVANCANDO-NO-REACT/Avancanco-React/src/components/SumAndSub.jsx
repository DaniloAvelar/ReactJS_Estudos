import { useState } from "react";

const SumAndSub = () => {

    let numbIni = 57;

    //const [number, setNumber] = useState(numbIni);
    const [number, setNumber] = useState(numbIni);

  return (
    <div> 
        <div>
            <h3>
                Trabalhando com useState (hook)
            </h3>
        </div>
        <div>
            <h5>Seu número inicial é: {numbIni}</h5>
        </div>
        <div>
            <div><button onClick={() => setNumber(numbIni+1)}>Somar</button></div>
            <div><button onClick={() => setNumber(numbIni-1)}>Subtrair</button></div>
        </div>
        <div>
            <h4>Resultado: {number}</h4>
        </div>
    </div>
  )
}

export default SumAndSub
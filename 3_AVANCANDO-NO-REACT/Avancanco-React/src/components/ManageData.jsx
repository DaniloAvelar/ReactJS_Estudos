import { useState } from "react";

const ManageData = () => {
    //Trabalhando com Hook setState

    let someData = 10;
    
    console.log(someData);

    const [number, setNumber] = useState(23);

  return (
    <div>
        <div>
            <p>valor: {someData}</p>
            <button onClick={() => (someData = 15)}>Trocar valor</button>
            <hr />
        </div>
        <div>
            <p>Valor State: {number}</p>
            <button onClick={() => (setNumber(7))}>Trocar valor State</button>
        </div>
    </div>
  )
}

export default ManageData
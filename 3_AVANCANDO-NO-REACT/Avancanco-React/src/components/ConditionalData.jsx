import { useState } from "react"


const ConditionalData = () => {

    const [x] = useState(false);

    const [name] = useState("Danilo");

  return (
    <div>
        <h3>Condicional Básica</h3>
        {/* Codigo React */}
        {x && <p>Se x for = true, SIM!</p>}
        {!x && <p>Se x for = false, NÃO!</p>}
        <br />
        <h3>Condicioanl If Ternário</h3>
        {name === "Danilo" ? (
            <p>O nome é Danilo!</p>
        ) : (
            <p>Nome não encontrado!</p>
        )}
    </div>
  )
}

export default ConditionalData
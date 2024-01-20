import { useState } from "react"

const ListData = () => {

    //Renderizando listas

    const [list] = useState(["Danilo", "Kelly", "Theo", "Maitê"]);

    const [users, setUsers] = useState([
       {id:1, nome: "Danilo", idade: 37, sexo: "Masc"}, 
       {id:2, nome: "Kelly", idade: 40, sexo: "Fem"}, 
       {id:3, nome: "Theo", idade: 1, sexo: "Masc"}, 
       {id:4, nome: "Maitê", idade: 1, sexo: "Fem"} 
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 5);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    };

    const deleteSeq = () => {

        let index = 1;

        setUsers((prevUsers) => {

            const data =  prevUsers.filter((user) => index !== user.id)
            index += 1;
            console.log(index);
            return data;

        })
    };

  return (
    <div>
        <h3>Trabalhando com Listas</h3> 
        <h4>Listas sem Key, geram [Warning] no console</h4>
        <div>
            <ul>
                {list.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
        <div>
            <h4>
                Lista com Key, gerado do proprio .map (i) = index
            </h4>
            <div>
                <ul>
                    {list.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
        <div>
            <h4>
                Lista com objeto e dados id retornado do msm Objeto
            </h4>
            <div>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>Nome: {user.nome} - Idade: {user.idade} - Sexo: {user.sexo}</li>
                    ))}
                </ul>
            </div>
        </div>
        <div>
            <h4>
                Deletando usuário randômicamente
            </h4>
            <div>
                <button onClick={deleteRandom}>Deletar usuario</button>
                <br />
                <button onClick={deleteSeq}>Deletar na sequência</button>
            </div>
        </div>
    </div>
  )
}

export default ListData
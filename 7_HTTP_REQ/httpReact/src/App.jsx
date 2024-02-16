import { useState, useEffect } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch'

//URL que esta rodando a API Json Server
const url = "http://localhost:3000/products"

function App() {

  //Products do GET
  const [products, setProducts] = useState([]);

  //Dados do Product para POST
  const [name, setName] = useState([]);
  const [price, setPrice] = useState([]);



  //Aula - 1: Resgatando dados do JSON do modo mais simples *** GET()
  // useEffect(() => {
  //   async function fetchData() {
  //     //Resposta asincrona do Fetch para a URL dos dados
  //     const res = await fetch(url);

  //     //Transformando o texto puro em Objeto para usar o .map
  //     const data = await res.json();

  //     //Alterando a variavel de estado com os dados lidos do Json
  //     setProducts(data)
  //   }

  //   fetchData();
  // }, []);


  // 4 - Custom Hook
  const {data: itemProd, httpConfig, loading} = useFetch(url);


  // Aula-2: Add de Produtos **** POST()

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Criando um objeto para mandar para o POST
    const product = {
      name: name,
      price: price,
    }

    // //Requisição POST 
    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },

    //   //Transformando o objeto criado acima em JSON para ser POSTADO
    //   body: JSON.stringify(product),
    // });

    // // Carregamento dinâmico em tempo real
    // /*
    //   Pegando o SetProducts antigo, (estado antigo dos produtos)
    //   Criando um novo array com SpredOperator ... Passando os produtos antigo e os novo
    //   Nao posso utilizar uma string, tenho que converter em JSON primeiro
    // */

    //   //Convertendo os Produtos em JSON
    // const addedProduct = await res.json();
     
    // //Add Novos Produtos a meu Objeto
    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    // 5 - Refatorando POST

    httpConfig(product, "POST");
    setName("");
    setPrice("");

  };


  return (
    <>
      <h1>Lista de Produtos</h1>
      {/* 6 - Loading */}
      {loading && <p>Carregando dados ...</p>}
      {!loading && (
        <ul>
        {itemProd && itemProd.map((product) => (
          <li key={product.id}>
            {product.name} - R$: {product.price}
          </li>
        ))}
      </ul>
      )}
      <div className="addProduct">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input 
              type="text"
              value={name} 
              name={name} 
              onChange={(e) => setName(e.target.value)}
            />
            Preço:
            <input 
              type="number" 
              value={price} 
              name={price} 
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {/* 7 - Loading no POST - Desabilitando o botão Cadastrar enquanto o Post é realizado*/}
          {loading && <input type="submit" disabled value="Aguarde ..." />}
          {!loading && <input type="submit" value="Cadastrar Produto" />}
        </form>
      </div>
    </>
  );
}

export default App

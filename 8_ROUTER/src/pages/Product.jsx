import { useParams } from "react-router-dom"
import { useFetch } from '../hooks/useFetch'
import { Link } from "react-router-dom"

const Product = () => {

    //esse ai esta vindo direto da ROTA do APP.jsx *** <Route path='/products/:id' element={<Product />} />
    const {id} = useParams()

    //Carregamento de dados individual
    const url = "http://localhost:3000/products/" + id;
    const {data: product, loading, error} = useFetch(url);

  return (
    <>
        <p>Id do Produto: {id}</p> 
        {error && <p>Ocorreu um erro ...</p>}
        {loading && <p>Carregando ...</p>}
        {product && (
            <div>
                <h1>{product.name}</h1>
                <p>{product.price}</p>
                <Link to={`/products/${product.id}/info`}>Mais informações</Link>
            </div>
        )}
    </> 
    )
}

export default Product
import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Info = () => {

  const {id} = useParams()

    //Carregamento de dados individual
    const url = "http://localhost:3000/products/" + id;
    const {data: product, loading, error} = useFetch(url);

  return (
    <div>
       { <h2>Informações de postagem desse produto {id}</h2> }
       {product && (
            <div>
                <h1>{product.name}</h1>
                <p>{product.price}</p>
                {/* <Link to={`/products/${product.id}/info`}>Mais informações</Link> */}
            </div>
        )}       
    </div>
  )
}

export default Info
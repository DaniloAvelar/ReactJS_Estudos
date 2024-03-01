import { useSearchParams, Link } from "react-router-dom"; 
import { useFetch } from "../hooks/useFetch";

const Search = () => {

    const[searchParams] = useSearchParams();
    console.log(searchParams);
    const url="http://localhost:3000/products?" + searchParams;

    // console.log(url);

    const {data: items, loading, error} = useFetch(url);

  return (
    <div>
        <h2>Resultados encontrados:</h2>
        <ul className="products">
        {items && items.map(item => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>R$: {item.price}</p>
            <Link to={`/products/${item.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Search
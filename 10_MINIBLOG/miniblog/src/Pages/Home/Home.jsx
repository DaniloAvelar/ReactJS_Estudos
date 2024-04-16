//CSS Styles
import styles from './Home.module.css';

import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useFetchDocuments } from '../../Hooks/useFetchDocuments';

//Components
import PostDetail from '../../Components/Post/PostDetail';

const Home = () => {

  const [query, setQuery] = useState("");
  const { documents: posts, loading } = useFetchDocuments("posts")
  const navigate = useNavigate("");

  console.log(posts)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`)
    } 
  };

  return (
    <div className={styles.home}>
      <h1>
        Posts recentes
      </h1>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input type="text" placeholder='Ou busque por tags...' onChange={(e) => setQuery(e.target.value)} />
        <button className='btn btn-dark'>Pesquisar</button>
      </form>
      <div>
        {loading && <p>Carregando...</p>}
        {posts && posts.map((post) => (
          <PostDetail key={post.id} post={post} />
        ))}
        {!posts && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className='btn'>criar primeiro post</Link>
          </div>
        )}

      </div>
    </div>
  )
}

export default Home
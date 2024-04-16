import styles from './Post.module.css';

//hooks
import { useParams } from 'react-router-dom';
import { useFetchPost } from '../../Hooks/useFetchPost';


const Post = () => {
  //Sempre usar o msm nome passado na URL da ROTA
  const { id } = useParams();

  //Sempre passar a collection
  const { document: post, loading } = useFetchPost("posts", id);

  return (
    <div className={styles.post_container}>
      {loading && <p>Carregando post...</p>}
      {post && (
        <>
          <h1>{post.title}</h1>
          <img src={post.image} alt={post.title} />
          <p>{post.body}</p>
          <h3>Este post trata sobre:</h3>
          <div className={styles.tags}>
            {post.tagsArray.map((tag) => (
              <div className={styles.tag}>
                <p key={tag}>
                  <span>#</span>
                  {tag}
                </p>
              </div>

            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Post
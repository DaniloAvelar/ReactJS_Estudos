import React from 'react'
import styles from "./Search.module.css"

//hooks
import { useFetchDocuments } from '../../Hooks/useFetchDocuments'
import { useQuery } from '../../Hooks/useQuery'
import PostDetail from '../../Components/Post/PostDetail';
import { Link } from 'react-router-dom';

const Seacrh = () => {
    const query = useQuery();
    const search = query.get("q");

    

    //Usando o Hook FetchDocuments
    const {documents: posts} = useFetchDocuments("posts", search);
    return (
        <div className={styles.search_container}> 
            <h2>Search</h2>
            <div className={styles.noposts}>
                {posts && posts.length === 0 && (
                    <>
                      <p>Não foram encontrados posts a partir da sua busca...</p>
                      <Link to="/" className='btn btn-dark'>
                        Voltar
                      </Link>
                    </>
                )}
            </div> 
            <div>
                {posts && posts.map((post) => (
                    <PostDetail key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default Seacrh
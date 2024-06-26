import styles from './Dashboard.module.css'
import { Link } from 'react-router-dom'

//hooks
import { useAuthValue } from "../../Contex/AuthContex";
import { useFetchDocuments } from "../../Hooks/useFetchDocuments"
import { useDeleteDocument } from '../../Hooks/useDeleteDocument';

const Dashboard = () => {

    const { user } = useAuthValue();
    const uid = user.uid;

    //Posts do usuário
    const { documents: posts, loading } = useFetchDocuments("posts", null, uid);

    //Iniciando o DeleteDoc Função DELETE
    const {deleteDocument} = useDeleteDocument("posts")

    if(loading) {
        return <p> Carregando...</p>
    }


    return (
        <div className={styles.dashboard}>
            <h2>Dashboard</h2>
            <p>Gerencie seus posts</p>
            {loading && <h3>Carregando...</h3>}
            {posts && posts.length === 0 ? (
                <div className={styles.noposts}>
                    <p>Não foram encontrados posts</p>
                    <Link to="/posts/create" className='btn'>
                        Criar primeiro post
                    </Link>
                </div>
            ) : (
                <>
                    <div className={styles.post_header}>
                        <span>Título</span>
                        <span>Ações</span>
                    </div>
                    {posts && posts.map((post) => (
                        <div key={post.id} className={styles.post_row}>
                            <p>{post.title}</p>
                            <div>
                                <Link to={`/post/${post.id}`} className="btn btn-outline">
                                    Ver
                                </Link>
                                <Link to={`/posts/edit/${post.id}`} className="btn btn-outline">
                                    Editar
                                </Link>
                                <button onClick={() => deleteDocument(post.id)} className="btn btn-outline btn-danger">
                                    Excluir
                                </button>
                            </div>
                        </div>
                    ))}
                </>
            )}


        </div>
    )
}

export default Dashboard
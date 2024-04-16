import styles from './EditPost.module.css'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuthValue } from '../../Contex/AuthContex'
import { useUpdateDocument } from '../../Hooks/useUpdateDocument'
import { useFetchPost } from "../../Hooks/useFetchPost"

const EditPost = () => {

    //Pegando o ID do parametro
    const { id } = useParams();
    const { document: post } = useFetchPost("posts", id);

    //Campos do Form e seus controles de estado
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState("");

    //Preenchendo os dados do POST no STATE
    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setBody(post.body);
            setImage(post.image);

            const textTags = post.tagsArray.join(", ");

            setTags(textTags);
        }
    }, [post]);

    //Desestruturando as funções dos Hooks
    const { user } = useAuthValue();
    const { updateDocument, response } = useUpdateDocument("posts");

    const navigate = useNavigate();

    //Função de Envio do FORM
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError("");

        //Validar URL IMAGE
        try {
            new URL(image)
        } catch (error) {
            setFormError("A imagem precisa ser uma URL.")
        }

        //Criar Array de Tags
        const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

        //Checar todos os valores
        if (!title || !image || !body || !tags) {
            setFormError("Por favor, preencha todos os campos.")
        }

        if (formError) return;

        const data = {
            title,
            image,
            body,
            tagsArray,
            uid: user.uid,
            createdBy: user.displayName,
        }

        updateDocument(id, data)

        //Redirect
        navigate("/dashboard");
    }

    return (
        <div className={styles.edit_post}>
            {post && (
                <>
                    <h2>
                        Editando o post: {post.title}
                    </h2>
                    <p>Altere seu post como quiser ...</p>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <span>Título:</span>
                            <input
                                type='text'
                                name="title"
                                required
                                placeholder='Pense em um bom título ...'
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                            />
                        </label>
                        <label>
                            <span>URL da imagem:</span>
                            <input
                                type='text'
                                name="image"
                                required
                                placeholder='Insira uma imagem que representa seu post'
                                onChange={(e) => setImage(e.target.value)}
                                value={image}
                            />
                        </label>
                        <p className={styles.preview_title}>Preview da imagem:</p>
                        <img 
                            className={styles.preview_image}
                            src={post.image}
                            alt={post.title}
                        />
                        <label>
                            <span>Conteúdo:</span>
                            <textarea
                                name="body"
                                required
                                placeholder='Insira o conteúdo do seu post'
                                onChange={(e) => setBody(e.target.value)}
                                value={body}
                            />
                        </label>
                        <label>
                            <span>Tags:</span>
                            <input
                                type='text'
                                name="tags"
                                required
                                placeholder='Insira as tags separadas por vírgula ( , )'
                                onChange={(e) => setTags(e.target.value)}
                                value={tags}
                            />
                        </label>
                        {!response.loading && <button className='btn'>Salvar Post</button>}
                        {response.loading && (
                            <button className='btn'>Aguarde...</button>
                        )}
                        {response.error && <p className='error'>{response.error}</p>}
                        {formError && <p className='error'>{formError}</p>}
                    </form>
                </>
            )}
        </div>
    )
}

export default EditPost
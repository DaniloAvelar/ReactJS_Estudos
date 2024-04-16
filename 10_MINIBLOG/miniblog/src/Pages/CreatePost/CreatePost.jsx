import React from 'react'
import styles from './CreatePost.module.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from '../../Contex/AuthContex'
import { useInsertDocument } from '../../Hooks/useInsertDocument'

const CreatePost = () => {

    //Campos do Form e seus controles de estado
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState("");

    //Desestruturando as funções dos Hooks
    const { user } = useAuthValue();
    const { insertDocument, response } = useInsertDocument("posts");

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

        insertDocument({
            title,
            image,
            body,
            tagsArray,
            uid: user.uid,
            createdBy: user.displayName,
        })

        //Redirect
        navigate("/");
    }

    return (
        <div className={styles.create_post}>
            <h2>
                Criar um novo Post
            </h2>
            <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
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
                {!response.loading && <button className='btn'>Criar Post</button>}
                {response.loading && (
                    <button className='btn'>Aguarde...</button>
                )}
                {response.error && <p className='error'>{response.error}</p>}
                {formError && <p className='error'>{formError}</p>}
            </form>
        </div>
    )
}

export default CreatePost
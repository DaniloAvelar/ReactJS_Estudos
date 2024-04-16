import  Styles  from "./PostDetail.module.css";
import { Link } from "react-router-dom";
import React from 'react'

const PostDetail = ({ post }) => {
    return (
        <div className={Styles.post_details}>
            <img src={post.image} alt={post.title} />
            <h2>{post.title}</h2>
            <p className={Styles.createdBy}>{post.createdBy}</p>
            <div className={Styles.tags}>
                {post.tagsArray.map((tag) => (
                    <p key={tag}>
                        <span>#{tag}</span>
                        
                    </p>
                ))}
            </div>
            <Link to={`/post/${post.id}`} className="btn btn-outline {Styles.ler}">
                Ler
            </Link>
        </div>
    )
}

export default PostDetail
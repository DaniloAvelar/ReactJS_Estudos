//CSS Style
import { Link } from 'react-router-dom';
import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.about}>
            <h2>
                Sobre o Mini <strong>Blog</strong>
            </h2>
            <p>Este projeto consiste em um Blog com [React] em Front-end e [Firebase] no Back-end</p>
            <Link to="/posts/create" className='btn'>
                Criar Post
            </Link>
        </div>
    )
}

export default About
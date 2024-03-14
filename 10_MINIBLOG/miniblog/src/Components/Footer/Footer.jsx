import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h4>
        Mini <i>Blog</i> - Developed by :: <Link to='https://www.linkedin.com/in/danilo-aliotto-avelar/'>Danilo Avelar</Link>
      </h4>
      <p>Mini <b>Blog</b>&copy; 2024 </p>

    </footer>
  )
}

export default Footer
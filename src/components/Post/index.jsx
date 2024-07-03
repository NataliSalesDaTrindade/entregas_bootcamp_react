import React from 'react';
import styles from './Post.module.css';

const Post = ({ titulo, paragrafo, linkImagem }) => {
  return (
    <article className={styles.post}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={linkImagem}
          alt="Imagem relacionada à postagem"
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{titulo}</h2>
        <p className={styles.paragraph}>{paragrafo}</p>
      </div>
    </article>
  );
};

export default Post;

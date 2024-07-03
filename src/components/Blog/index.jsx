import React from 'react';
import Post from '../Post';
import styles from './Blog.module.css';

const Blog = () => {
  return (
    <main className={styles.blog}>
      <Post
        linkImagem={'https://images.unsplash.com/photo-1549007953-2f2dc0b24019?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFzc2ElMjBzb3J2dGVlJTIwZGUlMjBtb3JhbmdvfGVufDB8fDB8fHww'}
        paragrafo={'O verão está chegando e nada melhor do que se refrescar com um delicioso sorvete de morango! Veja nossas dicas de como fazer seu próprio sorvete em casa.'}
        titulo={'Delícia de Verão: Sorvete de Morango'}
      />
      <Post
        linkImagem={'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vcmFuZ29zfGVufDB8fDB8fHww'}
        paragrafo={'Nada se compara a um sorvete artesanal para se refrescar. Descubra os segredos para preparar um sorvete caseiro irresistível.'}
        titulo={'Sorvete Artesanal: Dicas e Receitas'}
      />
      <Post
        linkImagem={'https://images.unsplash.com/photo-1527777309916-b59323b01809?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fG1vcmFuZ29zfGVufDB8fDB8fHww'}
        paragrafo={'Que tal experimentar novas combinações de sabores no seu sorvete de morango? Confira nossas sugestões e surpreenda-se com o resultado!'}
        titulo={'Combinações Inovadoras para Sorvete de Morango'}
      />
    </main>
  );
};

export default Blog;

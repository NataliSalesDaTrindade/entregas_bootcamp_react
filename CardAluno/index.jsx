import React from 'react';
import styles from './CardAluno.module.css';

const CardAluno = ({ nome, serie, media }) => {
  const corClasse = media >= 7 ? styles.aprovado : styles.reprovado;
  const status = media >= 7 ? 'Aprovado!' : 'Reprovado!';

  return (
    <div className={`${styles.card} ${corClasse}`}>
      <h2>{nome}</h2>
      <p>Série: {serie}</p>
      <p>Média: {media}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default CardAluno;

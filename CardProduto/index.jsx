import React from 'react';
import styles from './CardProduto.module.css';

const CardProduto = ({ nome, precoUnitario, desconto }) => {
  const precoComDesconto = precoUnitario * (1 - desconto / 100);
  const temDesconto = desconto > 0;

  return (
    <div className={styles.card}>
      <h2>{nome}</h2>
      <p className={styles.preco}>
        {temDesconto ? (
          <>
            <span className={styles.precoComDesconto}>R$ {precoComDesconto.toFixed(2)}</span>
            <span className={styles.precoOriginal}>R$ {precoUnitario.toFixed(2)}</span>
          </>
        ) : (
          `R$ ${precoUnitario.toFixed(2)}`
        )}
      </p>
      {temDesconto && <p className={styles.desconto}>Desconto: {desconto}%</p>}
    </div>
  );
};

export default CardProduto;

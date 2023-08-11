import { useState } from "react";

import { MdDelete } from "react-icons/md";
import styles from "./style.module.scss";

export const CartItemCard = ({ product, removeCartList, add }) => {
  const [count, setCount] = useState(1);

  const countMinus = (price) => {
    if (count > 1) {
      setCount((count) => count - 1);
      add(-price);
    }
  };

  const countPlus = (price) => {
    setCount((count) => count + 1);
    add(price);
  };

  return (
    <li className={styles.list}>
      <div className={styles.innerCard}>
        <div className={styles.imgTitlePrice}>
          <div className={styles.imgSquare}>
            <img src={product.img} alt={product.name} />
          </div>
          <div className={styles.alignTexts}>
            <h3 className="title black">{product.name}</h3>
            <span className="paragraph green">
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
            <div className={styles.itensNumber}>
              <button
                onClick={() => {
                  countMinus(product.price);
                }}
              >
                -
              </button>
              <p>{count}</p>
              <button
                onClick={() => {
                  countPlus(product.price);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <button
          className={styles.removeButton}
          onClick={() => removeCartList(product)}
          aria-label="delete"
          title="Remover item"
        >
          <MdDelete size={21} />
        </button>
      </div>
    </li>
  );
};

import styles from "./style.module.scss";

export const ProductCard = ({ product, addCartList }) => {
  return (
    <li className={styles.card}>
      <div className={styles.imgCard}>
        <img src={product.img} alt={product.name} />
      </div>
      <div className={styles.cardBody}>
        <h3 className="title black">{product.name}</h3>
        <span className="category">{product.category}</span>
        <span className="paragraph green">
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button
          className={`smButton btn paragraph white ${styles.buttonCard}`}
          onClick={() => addCartList(product)}
        >
          Adicionar
        </button>
      </div>
    </li>
  );
};

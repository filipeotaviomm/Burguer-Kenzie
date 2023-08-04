import { ProductCard } from "./ProductCard";
import styles from "./style.module.scss";

export const ProductList = ({ addCartList, productsResult }) => {
  return (
    <ul className={`containerMain ${styles.cardsList}`}>
      {productsResult.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addCartList={addCartList}
        />
      ))}
    </ul>
  );
};

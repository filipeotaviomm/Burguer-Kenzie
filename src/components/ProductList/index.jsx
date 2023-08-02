import { ProductCard } from "./ProductCard";

export const ProductList = ({ productList, addCartList }) => {
  return (
    <ul>
      {productList.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addCartList={addCartList}
        />
      ))}
    </ul>
  );
};

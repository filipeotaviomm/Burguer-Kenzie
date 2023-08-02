import { MdDelete } from "react-icons/md";

export const CartItemCard = ({ product, removeCartList }) => {
  return (
    <li>
      <div>
        <img src={product.img} alt={product.name} />
        <div>
          <h3>{product.name}</h3>
          <span>
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
      </div>
      <button
        onClick={() => removeCartList(product)}
        aria-label="delete"
        title="Remover item"
      >
        <MdDelete size={21} />
      </button>
    </li>
  );
};

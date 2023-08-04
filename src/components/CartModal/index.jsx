import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./style.module.scss";

export const CartModal = ({
  setIsVisible,
  cartList,
  removeCartList,
  removeAllCartList,
}) => {
  const total = cartList.reduce((prevValue, product) => {
    return prevValue + product.price;
  }, 0);

  return (
    <div className={styles.overlayBox} role="dialog">
      <div className={styles.modalBox}>
        <div className={styles.modalHeader}>
          <h2 className="title white">Carrinho de compras</h2>
          <button
            onClick={() => setIsVisible(false)}
            aria-label="close"
            title="Fechar"
          >
            <MdClose size={21} />
          </button>
        </div>
        <ul className={styles.cardsUl}>
          {cartList.map((product) => (
            <CartItemCard
              key={product.id}
              product={product}
              removeCartList={removeCartList}
            />
          ))}
        </ul>
        <div>
          <div className={styles.totalBox}>
            <div className={styles.totalPrice}>
              <span className="paragraph black">Total</span>
              <span className="price">
                {total.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
            <button className="remove lgButton" onClick={removeAllCartList}>
              Remover todos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

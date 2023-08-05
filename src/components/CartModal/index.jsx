import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./style.module.scss";
import { useEffect, useRef } from "react";

export const CartModal = ({
  setIsVisible,
  cartList,
  removeCartList,
  removeAllCartList,
}) => {
  const total = cartList.reduce((prevValue, product) => {
    return prevValue + product.price;
  }, 0);

  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutClick = (e) => {
      if (!modalRef.current?.contains(e.target)) {
        setIsVisible(false);
      }
    };

    window.addEventListener("mousedown", handleOutClick);

    return () => {
      window.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  const buttonRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        buttonRef.current?.click();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.overlayBox} role="dialog">
      <div ref={modalRef} className={styles.modalBox}>
        <div className={styles.modalHeader}>
          <h2 className="title white">Carrinho de compras</h2>
          <button
            ref={buttonRef}
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

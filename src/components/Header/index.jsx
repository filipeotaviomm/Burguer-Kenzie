import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./style.module.scss";

export const Header = ({
  setIsVisible,
  cartList,
  inputValue,
  setInputValue,
}) => {
  return (
    <header>
      <div className={`containerHeader ${styles.headerContainer}`}>
        <div className={styles.innerContainer}>
          <img src={Logo} alt="Logo Kenzie Burguer" />
          <button className={styles.cart} onClick={() => setIsVisible(true)}>
            <MdShoppingCart size={21} />
            <span className="cartNumber">{cartList.length}</span>
          </button>
        </div>
        <form className={styles.form}>
          <input
            className="placeHolder"
            placeholder="Digitar Pesquisa"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className={styles.search} type="submit">
            <MdSearch size={21} />
          </button>
        </form>
      </div>
    </header>
  );
};

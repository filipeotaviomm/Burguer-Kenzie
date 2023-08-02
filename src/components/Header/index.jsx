import { useEffect, useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";

export const Header = ({
  setIsVisible,
  cartList,
  productList,
  setproductListFilter,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const productsResult = productList.filter((product) => {
      const searchFilter =
        inputValue === ""
          ? true
          : product.name.toLowerCase().includes(inputValue.toLowerCase()) ||
            product.category.toLowerCase().includes(inputValue.toLowerCase());

      return searchFilter;
    });

    setproductListFilter(productsResult);
  }, [handleSearch]);

  return (
    <header>
      <img src={Logo} alt="Logo Kenzie Burguer" />
      <div>
        <button onClick={() => setIsVisible(true)}>
          <MdShoppingCart size={21} />
          <span>{cartList.length}</span>
        </button>
        <form>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="button" onClick={handleSearch}>
            <MdSearch size={21} />
          </button>
        </form>
      </div>
    </header>
  );
};

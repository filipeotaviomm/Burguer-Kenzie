import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { menuApi } from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [productList, setProductList] = useState([]);
  const [productListFilter, setproductListFilter] = useState([]);

  const cartListLocalStorage = JSON.parse(localStorage.getItem("@CARTLIST"));

  const [cartList, setCartList] = useState(
    cartListLocalStorage ? cartListLocalStorage : []
  );

  useEffect(() => {
    const getApi = async () => {
      try {
        const { data } = await menuApi.get("/products");
        setProductList(data);
        setproductListFilter(data);
      } catch (error) {
        console.error;
      }
    };
    getApi();
  }, []);

  useEffect(() => {
    localStorage.setItem("@CARTLIST", JSON.stringify(cartList));
  }, [cartList]);

  const addCartList = (clickedMeal) => {
    if (cartList.some((product) => product.id === clickedMeal.id)) {
      toast.error(`${clickedMeal.name} já está nos favoritos`);
    } else {
      setCartList([...cartList, clickedMeal]);
      toast.success(`${clickedMeal.name} adicionado aos favoritos`);
    }
  };

  const removeCartList = (clickedCard) => {
    const newCartList = cartList.filter((cart) => cart.id !== clickedCard.id);
    setCartList(newCartList);
    toast.success(`${clickedCard.name} removido dos favoritos`);
  };

  const removeAllCartList = () => {
    setCartList([]);
    toast("Todos os itens foram removidos");
  };

  //ok useEffect montagem - carrega os produtos da API e joga em productList
  //ok useEffect atualização - salva os produtos no localStorage (carregar no estado)
  // ok adição, exclusão, e exclusão geral do carrinho
  // ok renderizações condições e o estado para exibir ou não o carrinho
  // filtro de busca
  // estilizar tudo com sass de forma responsiva

  return (
    <>
      <Header
        setIsVisible={setIsVisible}
        cartList={cartList}
        productList={productList}
        setproductListFilter={setproductListFilter}
      />
      <main>
        <ProductList
          productList={productListFilter}
          addCartList={addCartList}
        />
        {isVisible ? (
          <CartModal
            setIsVisible={setIsVisible}
            removeCartList={removeCartList}
            removeAllCartList={removeAllCartList}
            cartList={cartList}
          />
        ) : null}
        <ToastContainer autoClose={2 * 1000} />
      </main>
    </>
  );
};

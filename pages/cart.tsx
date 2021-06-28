import styled from "styled-components";

import HeaderBar from "@/components/Header";
import { useStore } from "@/store/Store";
import { useEffect } from "react";
import { setCart } from "@/store/productReducer";
import CartProductsList from "@/components/CartProductsList";
import { Container } from "@/styles/Container";

export default function Cart({}: {}) {
  const {
    state: { cart },
    dispatch,
  } = useStore();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cart = window.localStorage.getItem("cart");
      let cartProducts;
      if (cart) {
        cartProducts = JSON.parse(cart);
      } else {
        cartProducts = [];
      }
      dispatch(setCart(cartProducts));
    }
  }, [dispatch]);

  return (
    <div>
      <HeaderBar />
      <Container>
        <CartProductsList />
      </Container>
    </div>
  );
}

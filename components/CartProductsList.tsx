import styled from "styled-components";
import { useStore } from "@/store/Store";
import CartProduct from "./CartProduct";
import { useEffect, useState } from "react";

const EmptyCartContainer = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
`;
const CartContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 3ch;
  padding: 1rem;
`;

const CartProductListContainer = styled.div`
  flex: 2 2 0;
`;
const CartTotalContainer = styled.div`
  flex: 1 1 0;
  margin-top: 1rem;
`;
const CartTotal = styled.div`
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  text-align: center;
`;

export default function CartProductsList() {
  const {
    state: { cart },
  } = useStore();
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    if (cart.length > 0) {
      let total = 0;
      for (let product of cart) {
        total += product.quantity * product.price;
      }
      setCartTotal(total);
    }
  }, [cart]);

  if (cart.length > 0) {
    return (
      <CartContainer>
        <CartProductListContainer>
          {cart.map((product) => (
            <CartProduct product={product} key={product.id} />
          ))}
        </CartProductListContainer>
        <CartTotalContainer>
          <CartTotal>
            <h1>Total: {cartTotal} Rs</h1>
          </CartTotal>
        </CartTotalContainer>
      </CartContainer>
    );
  }
  return (
    <EmptyCartContainer>
      <h1>No products in your cart!!</h1>
    </EmptyCartContainer>
  );
}

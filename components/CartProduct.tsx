import styled from "styled-components";
import Image from "next/image";

import { useStore } from "@/store/Store";
import {
  changeCartProductQuantity,
  removeProductFromCart,
} from "@/store/productReducer";

import { CartProductType } from "@/types/cartProduct";
import Button from "@/styles/Button";
import { useToasts } from "react-toast-notifications";

const StyledCartProduct = styled.div`
  max-width: 100%;
  display: flex;
  padding: 1rem;
  margin: 1rem 0;
  background: #fff;
  gap: 2ch;
`;
const CartProductDetails = styled.div`
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  h3,
  p {
    margin: 0;
  }
`;

const CartProductFooter = styled.div`
  margin-top: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProductQuantity = styled.div`
  display: inline-flex;
  border-radius: 8px;
  /* margin: 1rem 0; */
  margin-top: auto;
  span {
    font-size: 20px;
    font-weight: bold;
    padding: 6px 12px;
  }
`;
const IncreaseProductQuantity = styled.button`
  border: none;
  cursor: pointer;
  width: 30px;
  border-radius: 0px 8px 8px opx;
`;
const DecreaseProductQuantity = styled.button`
  border: none;
  cursor: pointer;
  width: 30px;
  border-radius: 0px 8px 8px opx;
`;

export default function CartProduct({ product }: { product: CartProductType }) {
  const { dispatch } = useStore();
  const { addToast } = useToasts();

  const changeQuantity = (quantity: number) => {
    if (quantity >= 1) {
      dispatch(
        changeCartProductQuantity({
          ...product,
          quantity,
        })
      );
      addToast(`Changed product quantity`, { appearance: "info" });
    }
  };

  const removeProduct = () => {
    dispatch(removeProductFromCart(product.id));
    addToast("Removed item", { appearance: "error" });
  };

  return (
    <StyledCartProduct>
      <Image src={product.imgSrc} width={120} height={150} alt={product.name} />
      <CartProductDetails>
        <div>
          <p>{product.brand}</p>
          <h3>{product.name}</h3>
          <p>
            <strong>Rs {product.price}.00</strong>
          </p>
        </div>
        <CartProductFooter>
          <ProductQuantity>
            <DecreaseProductQuantity
              onClick={() => void changeQuantity(product.quantity - 1)}
            >
              -
            </DecreaseProductQuantity>
            <span>{product.quantity}</span>
            <IncreaseProductQuantity
              onClick={() => void changeQuantity(product.quantity + 1)}
            >
              +
            </IncreaseProductQuantity>
          </ProductQuantity>
          <Button onClick={() => void removeProduct()}>Remove</Button>
        </CartProductFooter>
      </CartProductDetails>
    </StyledCartProduct>
  );
}

import styled from "styled-components";
import Image from "next/image";
import { ProductDataType } from "@/types/product";
import { useStore } from "@/store/Store";
import { addProductToCart } from "@/store/productReducer";
import Button from "@/styles/Button";

const ProductDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  background: #fff;
  border-radius: 8px;
  max-width: 250px;
`;

const ProductDetailsDiv = styled.div`
  word-break: break-word;
  padding: 0.5rem;
  span {
    display: block;
    font-size: 16px;
    color: #999;
  }
  p {
    margin: 0;
  }
`;

function Product({ product }: { product: ProductDataType }) {
  const { dispatch } = useStore();
  const addToCart = () => {
    const productToCart = {
      ...product,
      quantity: 1,
      selectedSizes: [],
    };
    dispatch(addProductToCart(productToCart));
  };

  return (
    <ProductDiv>
      <Image
        layout="fixed"
        src={product.imgSrc}
        width={225}
        height={250}
        alt={product.name}
      />
      <ProductDetailsDiv>
        <span>{product.brand}</span>
        <p>{product.name}</p>
        <p>
          <strong>Rs {product.price}.00</strong>
        </p>
      </ProductDetailsDiv>
      <Button onClick={() => addToCart()}>Add to cart</Button>
    </ProductDiv>
  );
}

export default Product;

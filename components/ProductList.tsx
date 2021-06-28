import { useStore } from "@/store/Store";
import styled from "styled-components";
import Product from "./Product";

const ProductListDiv = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: space-evenly;
  gap: 2ch;
`;

function ProductList() {
  const { state } = useStore();
  // console.log(state);
  return (
    <ProductListDiv>
      {state.products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </ProductListDiv>
  );
}

export default ProductList;

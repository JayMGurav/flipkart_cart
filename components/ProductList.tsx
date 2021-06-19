import { ProductDataType } from "@/types/product";
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

function ProductList({ products }: { products: Array<ProductDataType> }) {
  return (
    <ProductListDiv>
      {products.map((product) => (
        <Product product={product} key={Math.random()} />
      ))}
    </ProductListDiv>
  );
}

export default ProductList;

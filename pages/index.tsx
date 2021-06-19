import { GetServerSideProps } from "next";
import styled from "styled-components";

import StoreProvider from "@/store/Store";
import HeaderBar from "@/components/Header";
import ProductList from "@/components/ProductList";
import FilterProducts from "@/components/FilterProducts";
import { ProductDataType } from "@/types/product";

const Container = styled.main`
  max-width: 900px;
  padding: 0.5rem;
  margin: 0 auto;
`;

export default function Home({
  products,
}: {
  products: Array<ProductDataType>;
}) {
  return (
    <div>
      <HeaderBar />
      <StoreProvider initialState={{ filter: "", sortedBy: "", products }}>
        <Container>
          <FilterProducts />
          <ProductList />
        </Container>
      </StoreProvider>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await fetch(
    `https://flipkart-demo.vercel.app/api/products`
  ).then((res) => res.json());

  return {
    props: {
      products,
    },
  };
};

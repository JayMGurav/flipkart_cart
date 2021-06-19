import { useStore } from "@/store/Store";
import styled from "styled-components";

import HeaderBar from "@/components/Header";
import ProductList from "@/components/ProductList";
import FilterProducts from "@/components/FilterProducts";

const Container = styled.main`
  max-width: 900px;
  padding: 0.5rem;
  margin: 0 auto;
`;

export default function Home() {
  const { state } = useStore();

  return (
    <div>
      <HeaderBar />
      <Container>
        <FilterProducts />
        <ProductList products={state.products} />
      </Container>
    </div>
  );
}

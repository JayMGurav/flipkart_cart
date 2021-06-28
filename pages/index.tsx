import { GetServerSideProps } from "next";
import styled from "styled-components";

import { useStore } from "@/store/Store";
import HeaderBar from "@/components/Header";
import ProductList from "@/components/ProductList";
import FilterProducts from "@/components/FilterProducts";
import { ProductDataType } from "@/types/product";
import { useEffect } from "react";
import { setProducts } from "@/store/productReducer";
import { Container } from "@/styles/Container";

export default function Home({
  products,
}: {
  products: Array<ProductDataType>;
}) {
  const { dispatch } = useStore();
  useEffect(() => {
    dispatch(setProducts(products));
  }, [products, dispatch]);

  return (
    <div>
      <HeaderBar />
      <Container>
        <FilterProducts />
        <ProductList />
      </Container>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await fetch(
    `https://flipkart-cartpage.vercel.app/api/products`
  ).then((res) => res.json());
  return {
    props: {
      products,
    },
  };
};

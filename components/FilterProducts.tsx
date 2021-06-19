import styled from "styled-components";
import Image from "next/image";
import { useStore } from "@/store/Store";
import { useState } from "react";
import {
  filterProductsBySize,
  getProducts,
  sortProductsByPrice,
} from "@/store/productReducer";

const FilterDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
`;

const SortBy = styled.div`
  display: flex;
  padding: 0.5rem;
  gap: 1ch;
`;
const FilterBy = styled.div`
  display: flex;
  padding: 0.5rem;
  gap: 1ch;
`;

function FilterProducts() {
  const { dispatch } = useStore();
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("");

  const handleFilterChange = (e: any) => {
    setFilter(e.target.value);
    dispatch(filterProductsBySize(e.target.value));
  };

  const handleSortByChange = (e: any) => {
    setSortBy(e.target.value);
    dispatch(sortProductsByPrice(e.target.value));
  };

  const clearFilterAndSortBy = () => {
    setSortBy("");
    setFilter("");
    dispatch(getProducts());
  };

  return (
    <FilterDiv>
      <SortBy>
        <strong>Sort By:</strong>
        <div>
          <input
            type="radio"
            name="sort"
            checked={sortBy == "decreasing"}
            onChange={handleSortByChange}
            value="decreasing"
          />
          <label>High-to-Low</label>
        </div>
        <div>
          <input
            type="radio"
            name="sort"
            checked={sortBy == "increasing"}
            onChange={handleSortByChange}
            value="increasing"
          />
          <label>Low-to-High</label>
        </div>
      </SortBy>
      <FilterBy>
        <strong>Filter By:</strong>
        <div>
          <input
            type="radio"
            name="size"
            value="S"
            onChange={handleFilterChange}
            checked={filter === "S"}
          />
          <label>S</label>
        </div>
        <div>
          <input
            type="radio"
            name="size"
            value="M"
            onChange={handleFilterChange}
            checked={filter === "M"}
          />
          <label>M</label>
        </div>
        <div>
          <input
            type="radio"
            name="size"
            value="L"
            onChange={handleFilterChange}
            checked={filter === "L"}
          />
          <label>L</label>
        </div>
        <div>
          <input
            type="radio"
            name="size"
            value="XL"
            onChange={handleFilterChange}
            checked={filter === "XL"}
          />
          <label>XL</label>
        </div>
      </FilterBy>
      <button onClick={clearFilterAndSortBy}>clear</button>
    </FilterDiv>
  );
}

export default FilterProducts;

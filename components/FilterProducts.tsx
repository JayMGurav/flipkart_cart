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
  const [sortBy, setSortBy] = useState(0);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    dispatch(filterProductsBySize(e.target.value));
  };

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
    dispatch(sortProductsByPrice(e.target.value));
  };

  const clearFilterAndSortBy = () => {
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
            checked={sortBy == -1}
            onChange={handleSortByChange}
            value={-1}
          />
          <label>High-to-Low</label>
        </div>
        <div>
          <input
            type="radio"
            name="sort"
            checked={sortBy == 1}
            onChange={handleSortByChange}
            value={1}
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

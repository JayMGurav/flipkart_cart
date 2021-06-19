import { ProductDataType } from "@/types/product";
import { StateType, ActionType } from "@/types/store";

export const SET_PRODUCTS = "SET_PRODUCTS";
export const FILTER_PRODUCTS = "FILTER_PRODUCTS";
export const SORT_PRODUCTS = "SORT_PRODUCTS";

export const initialState: StateType = {
  products: [],
  filter: null,
  sortedBy: null,
};

export const setProducts = (productData: Array<ProductDataType>) => ({
  type: SET_PRODUCTS,
  data: { products: productData },
});

export const filterProductsBySize = (size: string) => ({
  type: FILTER_PRODUCTS,
  data: { size },
});

export const sortProductsByPrice = (sortBy: string) => {
  console.log(sortBy);
  return {
    type: SORT_PRODUCTS,
    data: { sortBy },
  };
};

function productReducer(
  state: StateType = initialState,
  action: ActionType = {}
): StateType {
  switch (action.type) {
    case FILTER_PRODUCTS:
      return {
        ...state,
        products: state.products.filter((product: ProductDataType) =>
          product.size.includes(action.data.size)
        ),
        filter: action.data.size,
      };

    case SORT_PRODUCTS:
      return {
        ...state,
        sortedBy: action.data.sortBy,
        products: [
          ...state.products.sort((a, b) => {
            if (action.data.sortBy === "desc") {
              return b.price - a.price;
            }
            if (action.data.sortBy === "asc") {
              return a.price - b.price;
            } else return 0;
          }),
        ],
      };

    case SET_PRODUCTS: {
      return {
        products: action.data.products,
        filter: null,
        sortedBy: null,
      };
    }
    default:
      return state;
  }
}

export default productReducer;

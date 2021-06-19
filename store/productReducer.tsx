import { ProductDataType } from "@/types/product";
import { StateType, ActionType } from "@/types/store";
import productData from "../data";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const FILTER_PRODUCTS = "FILTER_PRODUCTS";
export const SORT_PRODUCTS = "SORT_PRODUCTS";

export const initialState: StateType = {
  products: [],
  filter: "",
};

export const getProducts = () => ({
  type: GET_PRODUCTS,
  data: { products: productData },
});

export const filterProductsBySize = (size: string) => ({
  type: FILTER_PRODUCTS,
  data: { size },
});

export const sortProductsByPrice = (sortBy: number) => ({
  type: SORT_PRODUCTS,
  data: { sortBy },
});

function productReducer(
  state: StateType = initialState,
  action: ActionType = {}
): StateType {
  switch (action.type) {
    case FILTER_PRODUCTS:
      return {
        products: state.products.filter((product: ProductDataType) =>
          product.size.includes(action.data.size)
        ),
        filter: action.data.size,
      };
    case SORT_PRODUCTS:
      return {
        products: [
          ...state.products.sort(
            (product: ProductDataType) => action.data.sortBy
          ),
        ],
        filter: action.data.size,
      };
    case GET_PRODUCTS:
      return {
        products: action.data.products,
        filter: "",
      };

    default:
      return state;
  }
}

export default productReducer;

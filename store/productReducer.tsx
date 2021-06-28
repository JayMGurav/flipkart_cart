import { CartProductType } from "@/types/cartProduct";
import { ProductDataType } from "@/types/product";
import { StateType, ActionType } from "@/types/store";

export const SET_PRODUCTS = "SET_PRODUCTS";
export const FILTER_PRODUCTS = "FILTER_PRODUCTS";
export const SORT_PRODUCTS = "SORT_PRODUCTS";
export const SET_CART = "SET_CART";
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";
export const CHANGE_CART_PRODUCT_QUANTITY = "CHANGE_CART_PRODUCT_QUANTITY";

export const initialState: StateType = {
  products: [],
  filter: null,
  sortedBy: null,
  cart: [],
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
  return {
    type: SORT_PRODUCTS,
    data: { sortBy },
  };
};

export const setCart = (cartProducts: Array<CartProductType>) => {
  return {
    type: SET_CART,
    data: {
      cartProducts,
    },
  };
};

export const addProductToCart = (product: CartProductType) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    data: {
      product,
    },
  };
};

export const removeProductFromCart = (productId: number) => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    data: {
      productId,
    },
  };
};

export const changeCartProductQuantity = (productToUpdate: CartProductType) => {
  return {
    type: CHANGE_CART_PRODUCT_QUANTITY,
    data: {
      productToUpdate,
    },
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
        ...state,
        products: action.data.products,
        filter: null,
        sortedBy: null,
      };
    }

    case SET_CART: {
      return {
        ...state,
        cart: action.data.cartProducts,
      };
    }

    case ADD_PRODUCT_TO_CART: {
      const productExists = state.cart.find(
        (product) => product.id === action.data.product.id
      );
      console.log(productExists);
      if (productExists) {
        const filteredProducts = state.cart.filter(
          (product) => product.id !== action.data.product.id
        );
        const updatedCart = [
          ...filteredProducts,
          { ...productExists, quantity: productExists.quantity + 1 },
        ];
        window.localStorage.setItem("cart", JSON.stringify(updatedCart));
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        const updatedCart = [...state.cart, action.data.product];
        window.localStorage.setItem("cart", JSON.stringify(updatedCart));
        return {
          ...state,
          cart: updatedCart,
        };
      }
    }

    case REMOVE_PRODUCT_FROM_CART: {
      const updatedCart = state.cart.filter(
        (product) => product.id !== action.data.productId
      );
      window.localStorage.setItem("cart", JSON.stringify(updatedCart));
      return {
        ...state,
        cart: updatedCart,
      };
    }

    case CHANGE_CART_PRODUCT_QUANTITY: {
      const products = state.cart.filter(
        (product) => product.id !== action.data.productToUpdate.id
      );
      return {
        ...state,
        cart: [...products, action.data.productToUpdate],
      };
    }
    default:
      return state;
  }
}

export default productReducer;

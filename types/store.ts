import { CartProductType } from "./cartProduct";
import { ProductDataType } from "./product";

export type StateType = {
  products: Array<ProductDataType>;
  filter: string | null;
  sortedBy: "asc" | "desc" | null;
  cart: Array<CartProductType>;
};

export type ActionType = {
  type?: string;
  data?: any;
};

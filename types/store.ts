import { ProductDataType } from "./product";

export type StateType = {
  products: Array<ProductDataType>;
  filter: string;
};

export type ActionType = {
  type?: string;
  data?: any;
};

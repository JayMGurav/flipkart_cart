import { ProductDataType } from "./product";

export type StateType = {
  products: Array<ProductDataType>;
  filter: string;
  sortedBy: string;
};

export type ActionType = {
  type?: string;
  data?: any;
};

import { ProductDataType } from "./product";

export type StateType = {
  products: Array<ProductDataType>;
  filter: string | null;
  sortedBy: "asc" | "desc" | null;
};

export type ActionType = {
  type?: string;
  data?: any;
};

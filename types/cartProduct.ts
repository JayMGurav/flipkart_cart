import { ProductDataType, SizeType } from "./product";

export interface CartProductType extends ProductDataType {
  quantity: number;
  selectedSizes: Array<SizeType> | [];
}

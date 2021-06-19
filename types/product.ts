export enum SizeType {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
}

export interface ProductDataType {
  name: string;
  brand: string;
  price: number;
  size: Array<SizeType>;
  imgSrc: string;
}

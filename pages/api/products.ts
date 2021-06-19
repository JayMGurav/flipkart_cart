// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ProductDataType, SizeType } from "@/types/product";

const productData: Array<ProductDataType> = [
  {
    name: "Men Regular Fit Solid Spread Collar Casual Shirt",
    brand: "LEVI'S",
    price: 1039.0,
    size: [SizeType.S, SizeType.M],
    imgSrc: "/one.jpeg",
  },
  {
    name: "Men Slim Fit Checkered Slim Collar Casual Shirt",
    brand: "PETER ENGLAND",
    price: 809,
    size: [SizeType.S, SizeType.L],
    imgSrc: "/two.jpeg",
  },
  {
    name: "Men Regular Fit Checkered Casual Shirt",
    brand: "METRONAUT",
    price: 595.0,
    size: [SizeType.S, SizeType.M],
    imgSrc: "/three.jpeg",
  },
  {
    name: "Men Slim Fit Checkered Casual Shirt",
    brand: "PETER ENGLAND",
    price: 989.0,
    size: [SizeType.M, SizeType.L, SizeType.XL],
    imgSrc: "/four.jpeg",
  },
  {
    name: "Men Slim Fit Checkered Casual Shirt",
    brand: "METRONAUT",
    price: 688.0,
    size: [SizeType.M, SizeType.L, SizeType.XL],
    imgSrc: "/five.jpeg",
  },
  {
    name: "Men Slim Fit Solid Cut Away Collar Casual Shirt",
    brand: "LEVI'S",
    price: 1189.0,
    size: [SizeType.S, SizeType.M, SizeType.L],
    imgSrc: "/six.jpeg",
  },
  {
    name: "Men Slim Fit Checkered Spread Collar Casual Shirt",
    brand: "LEVI'S",
    price: 2079.0,
    size: [SizeType.S, SizeType.M, SizeType.L, SizeType.XL],
    imgSrc: "/seven.jpeg",
  },
  {
    name: "Men Slim Fit Checkered Slim Collar Casual Shirt",
    brand: "PETER ENGLAND",
    price: 809.0,
    size: [SizeType.S, SizeType.M, SizeType.XL],
    imgSrc: "/eight.jpeg",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<ProductData>>
) {
  res.status(200).json(productData);
}

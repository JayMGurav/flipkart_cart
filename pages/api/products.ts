import type { NextApiRequest, NextApiResponse } from "next";
import { ProductDataType } from "@/types/product";

import productData from "../../data";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<ProductDataType>>
) {
  res.status(200).json(productData);
}

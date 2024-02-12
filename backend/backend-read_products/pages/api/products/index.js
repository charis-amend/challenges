// import { products } from "../../../lib/products";
import Product from "@/db/models/Product";
import dbConnect from "@/db/connect";

export default async function handler(request, response) {

  await dbConnect();
  if (request.method === "GET") {

    try {
      const products = await Product.find()
      console.log(products)
      return response.status(200).json(products)
    } catch (error) {
      console.error(error)
    }
  }

}

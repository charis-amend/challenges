// import { products } from "../../../lib/products";
import Product from "@/db/models/Product";
import dbConnect from "@/db/connect";

export default async function handler(request, response) {

  await dbConnect();
  if (request.method === "GET") {

    try {
      const products = await Product.find()
      return response.status(200).json(products)
    } catch (error) {
      console.error(error)
    }
  }

  if (request.method === "POST") {
    console.log(request)
    try {
      const productData = request.body
      await Product.create(productData)
      return response.status(201).json({ status: "New Fish was added." })
    } catch (error) {
      console.error(error)
      return response.status(400).json({ error: error.message })
    }
  }
}

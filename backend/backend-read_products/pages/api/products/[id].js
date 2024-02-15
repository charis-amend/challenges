// import { products } from "../../../lib/products";
import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";
import Review from "@/db/models/Review";

export default async function handler(request, response) {

  await dbConnect();
  const { id } = request.query;

  const product = await Product.findById(id).populate("reviews")
  response.status(200).json(product);

  if (!product) {
    return response.status(404).json({ status: "Not Found" });
  }

  if (request.method === "PUT") {
    const updatedProductData = request.body
    const productToUpdate = await Product.findByIdAndUpdate(id, updatedProductData)
    if (!productToUpdate) {
      return response.status(404).json({ status: "Couldn't update Product" })
    }
    response.status(200).json({ status: "Updated Product Data successfully" })
  }
}
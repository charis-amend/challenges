import dbConnect from "@/db/models/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {

  await dbConnect();
  if (request.method === "GET") {
    try {
      const products = await Product.find()
      console.log(products)

    } catch (error) {

    }
  }

  return response.status(200).json(products);
}

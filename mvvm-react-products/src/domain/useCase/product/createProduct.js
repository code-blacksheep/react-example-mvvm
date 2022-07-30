import { createProduct } from "../../../data/repository/productRepository";
export async function CreateProductUseCase(productData) {
  return await createProduct(productData);
}

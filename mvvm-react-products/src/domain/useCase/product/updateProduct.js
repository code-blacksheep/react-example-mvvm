import { updateProduct } from "../../../data/repository/productRepository";
export async function UpdateProductUseCase(id, productData) {
  return await updateProduct(id, productData);
}

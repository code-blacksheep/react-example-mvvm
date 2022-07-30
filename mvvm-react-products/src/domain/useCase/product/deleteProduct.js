import { deleteProduct } from "../../../data/repository/productRepository";

export async function DeleteProductUseCase(id) {
  return await deleteProduct(id);
}

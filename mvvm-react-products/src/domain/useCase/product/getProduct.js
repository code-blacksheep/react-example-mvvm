import { getProduct } from "../../../data/repository/productRepository";
export async function GetProductUseCase(id) {
  return await getProduct(id);
}

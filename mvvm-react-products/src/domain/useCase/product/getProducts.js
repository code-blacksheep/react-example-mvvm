import { getProducts } from "../../../data/repository/productRepository";
export async function GetProductsUseCase() {
  return await getProducts();
}

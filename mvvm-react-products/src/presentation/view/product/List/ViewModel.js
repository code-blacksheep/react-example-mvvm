import { useState } from "react";
import { GetProductsUseCase } from "../../../../domain/useCase/product/getProducts";

export default function ProductListViewModel() {
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const { result, error } = await GetProductsUseCase();
    console.log("result =)", result);
    setError(error);
    setProducts(result);
  }
  return {
    error,
    getProducts,
    products,
  };
}

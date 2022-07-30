import { useState } from "react";
import { DeleteProductUseCase } from "../../../../domain/useCase/product/deleteProduct";
import { GetProductUseCase } from "../../../../domain/useCase/product/getProduct";
import { UpdateProductUseCase } from "../../../../domain/useCase/product/updateProduct";

export default function ProductDetailViewModel() {
  const [error, setError] = useState("");
  const [values, setValues] = useState({
    id: null,
    name: "",
    price: 0,
  });

  async function getProduct(id) {
    const { result, error } = await GetProductUseCase(id);
    setError(error);
    setValues({ ...result });
  }

  function onChange(value, prop) {
    setValues({ ...values, [prop]: value });
  }

  async function updateProduct(id) {
    const { result, error } = await UpdateProductUseCase(id, values);
    setError(error);
  }

  async function deleteProduct(id) {
    const { result, error } = await DeleteProductUseCase(id);
    setError(error);
  }

  return {
    error,
    deleteProduct,
    updateProduct,
    getProduct,
    onChange,
    ...values,
  };
}

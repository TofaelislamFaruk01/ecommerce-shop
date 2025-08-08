import { Product } from "@/types";
import api from "./axios";

/**
 * Fetch a paginated list of products (10 at a time) starting from `skip`.
 * @param skip - Number of products to skip for pagination.
 * @returns A Promise that resolves to an array of Product objects.
 */
export const fetchProducts = async (skip: number): Promise<Product[]> => {
  const res = await api.get(`/products?limit=10&skip=${skip}`);
  return res.data.products;
};

/**
 * Search products by query string with pagination.
 * @param query - Search keyword.
 * @param skip - Number of products to skip for pagination.
 * @returns A Promise that resolves to an array of matching Product objects.
 */
export const searchProducts = async (
  query: string,
  skip: number
): Promise<Product[]> => {
  const res = await api.get(
    `/products/search?q=${encodeURIComponent(query)}&limit=10&skip=${skip}`
  );
  return res.data.products;
};

/**
 * Fetch details of a single product by its ID.
 * @param id - Product ID.
 * @returns A Promise that resolves to a Product object with full details.
 */
export const fetchProductById = async (id: number): Promise<Product> => {
  const res = await api.get(`/products/${id}`);
  return res.data;
};

/**
 * Delete a product by its ID.
 * @param id - Product ID to delete.
 * @returns A Promise that resolves when deletion is successful.
 */
export const deleteProductById = async (id: number): Promise<void> => {
  await api.delete(`/products/${id}`);
};

/**
 * Update a product by its ID with partial product data.
 * @param id - Product ID to update.
 * @param data - Partial product data to update.
 * @returns A Promise that resolves to the updated Product object.
 */
export const updateProductById = async (
  id: number,
  data: Partial<Product>
): Promise<Product> => {
  const res = await api.put(`/products/${id}`, data);
  return res.data;
};

/**
 * Create a new product by sending product data to the server.
 * @param data - Partial product data to create a new product.
 *               (Can contain one or more product fields.)
 * @returns A Promise that resolves to the newly created Product object.
 */
export const createProduct = async (
  data: Partial<Product>
): Promise<Product> => {
  const res = await api.post("/products/add", data);
  return res.data;
};

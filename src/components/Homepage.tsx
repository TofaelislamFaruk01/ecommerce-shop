import { FC } from "react";
import { fetchProducts } from "@/lib/api-end-point/products";
import { Product } from "@/types";

import ProductList from "./ProductList";
import EmptyPlaceholder from "./EmptyPlaceholder";

const HomePage: FC = async () => {
  let initialProducts: Product[] = [];

  try {
    initialProducts = await fetchProducts(0);
  } catch (error) {
    console.error("Failed to load products:", error);
  }

  if (initialProducts.length === 0) {
    return (
      <EmptyPlaceholder
        title="No Products Available"
        message="We could not load any products at the moment."
      />
    );
  }

  return <ProductList initialProducts={initialProducts} />;
};

export default HomePage;

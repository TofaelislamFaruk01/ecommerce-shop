"use client";

import React, { FC, useState, useEffect, useRef, useCallback } from "react";
import { Product, ProductListProps } from "@/types";
import { fetchProducts, searchProducts } from "@/lib/api-end-point/products";
import ProductCard from "@/components/ProductCard";
import SkeletonLoader from "@/components/SkeletonLoader";

const ProductList: FC<ProductListProps> = ({ initialProducts }) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [query, setQuery] = useState<string>("");
  const [skip, setSkip] = useState<number>(initialProducts.length);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = query
        ? await searchProducts(query, skip)
        : await fetchProducts(skip);
      setProducts((prev) => (skip === 0 ? data : [...prev, ...data]));
      setHasMore(data.length === 10);
    } catch {
      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      skip === initialProducts.length &&
      !query &&
      initialProducts.length > 0
    ) {
      return;
    }
    fetchData();
  }, [skip, query, initialProducts.length]);

  const handleSearch = (value: string) => {
    setQuery(value);
    setSkip(0);
  };

  const loadMore = () => {
    if (hasMore && !loading) {
      setSkip((prev) => prev + 10);
    }
  };

  const observer = useRef<IntersectionObserver | null>(null);

  const lastProductRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore();
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div className="p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search products..."
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => {
          if (products.length === index + 1) {
            return (
              <div key={product.id} ref={lastProductRef}>
                <ProductCard product={product} />
              </div>
            );
          }
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>

      {loading && <SkeletonLoader message="Loading more products..." />}
      {!hasMore && !loading && (
        <SkeletonLoader message="No more products to load." />
      )}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default ProductList;

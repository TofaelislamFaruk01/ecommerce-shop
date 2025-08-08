"use client";

import React, { FC } from "react";
import { useSelector } from "react-redux";

import { State } from "@/redux/store";
import ProductCard from "@/components/ProductCard";
import EmptyPlaceholder from "./EmptyPlaceholder";

const FavoriteClient: FC = () => {
  const FavoriteProducts = useSelector(
    (state: State) => state.favoriteProducts
  );
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Favorite Products</h1>
      {FavoriteProducts?.length === 0 ? (
        <EmptyPlaceholder
          title="No Favorite Products"
          message="You have not added any products to your favorites yet."
        />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {FavoriteProducts.map((favProduct) => (
            <ProductCard key={favProduct.id} product={favProduct} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteClient;

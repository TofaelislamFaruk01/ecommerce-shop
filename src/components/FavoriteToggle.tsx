"use client";

import React, { FC } from "react";
import { useSelector } from "react-redux";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { State } from "@/redux/store";
import { FavoriteToggleProps } from "@/types";
import { Button } from "@/components/ui/button";
import { useFavoriteToggle } from "@/hooks/useFavoriteToggle";

const FavoriteToggle: FC<FavoriteToggleProps> = ({ product }) => {
  const Favorites = useSelector((state: State) => state.favoriteProducts);
  const isFavorite = Favorites?.some((item) => item.id === product.id);

  const { toggleFavorite } = useFavoriteToggle();

  return (
    <Button
      onClick={() => toggleFavorite(product, isFavorite)}
      className="w-full flex items-center justify-center gap-2 text-base"
    >
      {isFavorite ? (
        <>
          <AiFillHeart className="text-red-500 text-xl" />
          UnFavorite
        </>
      ) : (
        <>
          <AiOutlineHeart className="text-white dark:text-gray-600 text-xl" />
          Favorite
        </>
      )}
    </Button>
  );
};

export default FavoriteToggle;

"use client";

import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { Product } from "@/types";
import { addItem, removeItem } from "@/redux/favorites/favoriteSlice";

export const useFavoriteToggle = () => {
  const dispatch = useDispatch();

  const toggleFavorite = (product: Product, isFavorite: boolean) => {
    if (isFavorite) {
      dispatch(removeItem(product.id));
      toast.dismiss();
      toast.success("Removed from Favorite", {
        description: `${product.title} has been removed.`,
      });
    } else {
      dispatch(addItem(product));
      toast.dismiss();
      toast.success("Added to Favorite", {
        description: `${product.title} has been added.`,
      });
    }
  };

  return { toggleFavorite };
};

"use client";

import React, { FC, useState } from "react";
import { AiFillHeart, AiOutlineHeart, AiFillEdit } from "react-icons/ai";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

import { Product, ProductDetailsClientProps } from "@/types";
import {
  deleteProductById,
  updateProductById,
} from "@/lib/api-end-point/products";
import { removeItem } from "@/redux/favorites/favoriteSlice";
import { State } from "@/redux/store";

import { Button } from "@/components/ui/button";
import ProductForm from "@/components/ProductForm";
import ConfirmDeleteModal from "@/components/ConfirmDeleteModal";
import { useFavoriteToggle } from "@/hooks/useFavoriteToggle";
import { ProductForm_Mode } from "@/enums";
import ProductDetailsSkeleton from "./ProductDetailsSkeleton";

const ProductDetailsClient: FC<ProductDetailsClientProps> = ({
  initialProduct,
}) => {
  console.log("initially" + initialProduct);
  const router = useRouter();
  const dispatch = useDispatch();

  const { toggleFavorite } = useFavoriteToggle();
  const Favorites = useSelector((state: State) => state.favoriteProducts);
  const isFavorite = Favorites?.some((p) => p.id === initialProduct.id);

  const [product, setProduct] = useState<Product>(initialProduct);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteProductById(product.id);
      if (isFavorite) {
        dispatch(removeItem(product.id));
      }
      toast.success("Product Deleted Successfully");
      router.push("/");
    } catch {
      toast.error("Something went wrong while deleting.");
    }
  };

  const handleUpdate = async (
    updatedData: Omit<Product, "id" | "rating" | "images">
  ) => {
    try {
      const updated = await updateProductById(product.id, updatedData);
      setProduct(updated);
      setIsEditing(false);
      toast.success("Product Updated Successfully");
    } catch {
      toast.error("Failed to update product.");
    }
  };

  const handleToggleFavorite = () => {
    toggleFavorite(product, isFavorite);
  };

  if (!product) return <ProductDetailsSkeleton />;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-800 p-6">
        <h2 className="text-center py-5 mb-4 text-5xl font-bold text-gray-900 dark:text-white">
          {product.title}
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center pb-5">
          <div className="w-full md:w-[45%] flex justify-center">
            <Image
              src={product.images?.[0] || product.thumbnail || "/fallback.jpg"}
              alt={product.title}
              width={400}
              height={400}
              className="w-full h-[300px] object-contain rounded-md"
            />
          </div>

          <div className="w-full md:w-[55%] space-y-6">
            {!isEditing ? (
              <>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {product.description}
                </p>

                <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-lg text-gray-700 dark:text-gray-300 pt-2">
                  <p>
                    <span className="font-bold">Price:</span>{" "}
                    <span className="font-bold">${product.price}</span>
                  </p>
                  <p>
                    <span className="font-bold">Brand:</span>{" "}
                    <span className="font-normal">{product.brand}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Stock:</span>{" "}
                    <span className="font-normal">{product.stock}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Rating:</span>{" "}
                    <span className="font-normal">{product.rating}</span>
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-6">
                  <Button
                    onClick={handleToggleFavorite}
                    className="text-lg px-5 py-3 flex items-center gap-2"
                  >
                    {isFavorite ? (
                      <>
                        <AiFillHeart className="text-red-500" /> UnFavorite
                      </>
                    ) : (
                      <>
                        <AiOutlineHeart className="text-white dark:text-gray-600" />{" "}
                        Favorite
                      </>
                    )}
                  </Button>

                  <Button
                    variant="secondary"
                    onClick={() => setIsEditing(true)}
                    className="text-lg px-5 py-3 flex items-center gap-2"
                  >
                    <AiFillEdit /> Edit
                  </Button>

                  <ConfirmDeleteModal
                    open={showDeleteDialog}
                    setOpen={setShowDeleteDialog}
                    onConfirm={handleDelete}
                  />
                </div>
              </>
            ) : (
              <ProductForm
                mode={ProductForm_Mode.EDIT}
                product={{
                  title: product.title,
                  description: product.description || "",
                  price: product.price,
                  stock: product.stock,
                  brand: product.brand || "",
                  category: product.category || "",
                }}
                onSave={handleUpdate}
                onCancel={() => setIsEditing(false)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsClient;

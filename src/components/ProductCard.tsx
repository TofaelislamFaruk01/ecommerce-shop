import React, { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import { Star } from "lucide-react";

import { ProductCardProps } from "@/types";

import FavoriteToggle from "./FavoriteToggle";

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden bg-white dark:bg-gray-900 flex flex-col relative">
      <span className="absolute top-2 right-2 bg-blue-400 dark:bg-gray-800 text-white px-3 py-1 text-sm rounded-full font-medium z-10">
        {product.category}
      </span>

      <Link href={`/product-details/${product.id}`} className="p-4 flex-1">
        <div className="w-full h-[180px] flex justify-center items-center overflow-hidden">
          <Image
            src={product.images?.[0] || "/placeholder.png"}
            alt={product.title}
            width={180}
            height={180}
            className="object-contain max-h-[160px] transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>

        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-3 line-clamp-1">
          {product.title}
        </h2>

        <div className="flex justify-between items-center mt-2">
          <p className="font-bold text-green-600 text-lg">${product.price}</p>
          <span className="flex items-center gap-1 text-md text-gray-500 dark:text-gray-400">
            <Star size={18} className="text-yellow-500" />
            {product.rating?.toFixed(1) || "N/A"}
          </span>
        </div>
      </Link>
      <div className="px-4 pb-4 mt-auto">
        <FavoriteToggle product={product} />
      </div>
    </div>
  );
};

export default ProductCard;

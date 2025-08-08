import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductDetailsSkeleton = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-800 p-6">
        <Skeleton height={50} width={"60%"} className="mb-6" />

        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
          <div className="w-full md:w-[45%] flex justify-center">
            <Skeleton height={300} width={300} />
          </div>

          <div className="w-full md:w-[55%] space-y-4">
            <Skeleton count={4} height={20} />

            <div className="grid grid-cols-2 gap-4 pt-2">
              <Skeleton height={24} />
              <Skeleton height={24} />
              <Skeleton height={24} />
              <Skeleton height={24} />
            </div>

            <div className="flex flex-wrap gap-3 pt-6">
              <Skeleton height={40} width={120} />
              <Skeleton height={40} width={100} />
              <Skeleton height={40} width={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;

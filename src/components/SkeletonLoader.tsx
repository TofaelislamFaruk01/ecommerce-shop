"use client";

import React, { FC } from "react";
import { SkeletonLoaderProps } from "@/types";

const SkeletonLoader: FC<SkeletonLoaderProps> = ({
  message = "Loading...",
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] gap-4 animate-pulse">
      <div className="flex flex-col items-center justify-center h-[300px] gap-4 animate-pulse bg-gray-300 w-full"></div>
      <div className="w-12 h-12 border-4 border-gray-300 border-t-transparent rounded-full animate-spin" />
      <p className="text-gray-600 dark:text-gray-300 text-sm">{message}</p>
    </div>
  );
};
export default SkeletonLoader;

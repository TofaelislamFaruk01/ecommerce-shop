"use client";

import React, { FC } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import ProductForm from "@/components/ProductForm";
import { ProductFormInputs } from "@/types";
import { ProductForm_Mode } from "@/enums";
import { createProduct } from "@/lib/api-end-point/products";

const CreateProductClient: FC = () => {
  const router = useRouter();

  const handleSave = async (data: ProductFormInputs) => {
    try {
      const response = await createProduct(data);
      toast.success(`Product created successfully. ID: ${response.id}`);
      router.push("/");
    } catch (error) {
      toast.error("Failed to create product");
    }
  };

  return <ProductForm mode={ProductForm_Mode.CREATE} onSave={handleSave} />;
};

export default CreateProductClient;

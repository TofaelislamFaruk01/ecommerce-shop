"use client";

import React, { FC, useEffect } from "react";
import { useForm } from "react-hook-form";

import { ProductFormInputs, ProductFormProps } from "@/types";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ProductForm_Mode } from "@/enums";

const ProductForm: FC<ProductFormProps> = ({
  mode,
  product,
  onSave,
  onCancel,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProductFormInputs>({
    defaultValues: product || {
      title: "",
      description: "",
      price: 0,
      stock: 0,
      brand: "",
      category: "",
    },
  });

  useEffect(() => {
    if (product) {
      reset(product);
    }
  }, [product, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSave)}
      className="max-w-lg mx-auto space-y-6 mt-5 mb-1 px-3 sm:px-0"
    >
      <h1 className="text-2xl font-bold">
        {mode === ProductForm_Mode.CREATE
          ? "Create New Product"
          : "Edit Product"}
      </h1>

      <div>
        <Label className="mb-1">
          Title <span className="text-red-500 font-semibold">*</span>
        </Label>
        <Input
          {...register("title", { required: "Title is required" })}
          className={errors.title ? "border-red-500" : ""}
          placeholder="Product title"
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
      </div>

      <div>
        <Label className="mb-1">Description</Label>
        <Textarea
          {...register("description")}
          placeholder="Product description"
        />
      </div>

      <div>
        <Label className="mb-1">
          Price <span className="text-red-500 font-semibold">*</span>
        </Label>
        <Input
          type="number"
          step="0.01"
          {...register("price", {
            required: "Price is required",
            valueAsNumber: true,
            min: { value: 1, message: "Price must be at least 1" },
          })}
          className={errors.price ? "border-red-500" : ""}
          placeholder="Product price"
        />
        {errors.price && (
          <p className="text-red-500 text-sm">{errors.price.message}</p>
        )}
      </div>

      <div>
        <Label className="mb-1">
          Stock <span className="text-red-500 font-semibold">*</span>
        </Label>
        <Input
          type="number"
          {...register("stock", {
            required: "Stock is required",
            valueAsNumber: true,
            min: { value: 1, message: "Stock must be at least 1" },
          })}
          className={errors.stock ? "border-red-500" : ""}
          placeholder="Available stock"
        />
        {errors.stock && (
          <p className="text-red-500 text-sm">{errors.stock.message}</p>
        )}
      </div>

      <div>
        <Label className="mb-1">Brand</Label>
        <Input {...register("brand")} placeholder="Product brand" />
      </div>

      <div>
        <Label className="mb-1">Category</Label>
        <Input {...register("category")} placeholder="Product category" />
      </div>

      <div className="flex gap-4 pt-4">
        <Button type="submit" disabled={isSubmitting} className="flex-1">
          {mode === ProductForm_Mode.CREATE ? "Create Product" : "Save Changes"}
        </Button>
        {mode === ProductForm_Mode.EDIT && onCancel && (
          <Button
            type="button"
            variant="secondary"
            onClick={onCancel}
            className="flex-1"
          >
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
};

export default ProductForm;

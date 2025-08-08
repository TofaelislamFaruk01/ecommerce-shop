import { COLOR_MODE, ProductForm_Mode } from "@/enums";

export interface Product {
  id: number;
  title: string;
  description?: string;
  price: number;
  rating: number;
  stock: number;
  brand?: string;
  category?: string;
  images: string[];
  thumbnail?: string;
  weight?: number;
}
export interface ProductCardProps {
  product: Product;
}

export interface ProductEditFormProps {
  product: Product;
  onSave: (updatedProduct: Product) => void;
  onCancel: () => void;
}

export interface ProductFormProps {
  mode: ProductForm_Mode;
  product?: ProductFormInputs;
  onSave: (data: ProductFormInputs) => void;
  onCancel?: () => void;
}

export type Theme = COLOR_MODE;

export interface ThemeState {
  mode: Theme;
}

export type ConfirmDeleteModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onConfirm: () => void;
};

export type SkeletonLoaderProps = {
  message?: string;
};

export interface ProductListProps {
  initialProducts: Product[];
}

export interface ProductDetailsPageProps {
  params: { id: string };
}

export interface ProductFormInputs {
  title: string;
  description?: string;
  price: number;
  stock: number;
  brand?: string;
  category?: string;
}

export interface FavoriteToggleProps {
  product: Product;
}

export interface ProductDetailsClientProps {
  initialProduct: Product;
}

export interface EmptyPlaceholderProps {
  title?: string;
  message?: string;
  icon?: React.ReactNode;
  className?: string;
}

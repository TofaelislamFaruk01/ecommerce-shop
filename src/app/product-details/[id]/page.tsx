import EmptyPlaceholder from "@/components/EmptyPlaceholder";
import ProductDetailsClient from "@/components/ProductDetailsClient";
import { fetchProductById } from "@/lib/api-end-point/products";

interface ProductDetailsPageProps {
  params: Promise<{ id: string }>;
}

const ProductDetailsPage = async ({ params }: ProductDetailsPageProps) => {
  const awaitedParams = await params;
  const productId = Number(awaitedParams.id);

  try {
    const product = await fetchProductById(productId);

    if (!product) {
      return (
        <EmptyPlaceholder
          title="Product Not Found"
          message="The product you are looking for might have been removed."
        />
      );
    }

    return <ProductDetailsClient initialProduct={product} />;
  } catch (error) {
    console.error("Failed to fetch the products:", error);
    return (
      <EmptyPlaceholder
        title="Product Not Found"
        message="The product you are looking for might have been removed."
      />
    );
  }
};

export default ProductDetailsPage;


import { fetchProducts } from "@/lib/api/products.api";
import { InfiniteScrollPage } from "@/components/shared/infinite-scroll-page";

export default async function CatalogPage() {
  const initial = await fetchProducts(20, 0);

  return (
    <div className="container mx-auto py-10">
      <InfiniteScrollPage initial={initial} />
    </div>
  );
}

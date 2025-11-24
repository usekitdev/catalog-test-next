import { Product } from "@/lib/types/product";

export async function fetchProducts(
  limit = 20,
  skip = 0
): Promise<Product[]> {
  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.products;
}

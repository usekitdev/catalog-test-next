"use client";

import { useEffect, useRef, useState } from "react";
import { Product } from "@/lib/types/product";
import { ProductList } from "../product-list";
import { fetchProducts } from "@/lib/api/products.api";

export function InfiniteScrollPage({ initial }: { initial: Product[] }) {
  const [items, setItems] = useState(initial);
  const [skip, setSkip] = useState(initial.length);

  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(async ([entry]) => {
      if (!entry.isIntersecting) return;

      const more = await fetchProducts(20, skip);

      if (more.length) {
        setItems((prev) => [...prev, ...more]);
        setSkip((prev) => prev + more.length);
      }
    });

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [skip]);

  return (
    <>
      <ProductList items={items} />
      <div ref={loaderRef} className="h-10" />
    </>
  );
}

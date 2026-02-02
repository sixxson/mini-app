// src/hooks/useProducts.ts
import { useEffect, useState } from "react";
import { getProducts } from "@/api/product";
import { Product } from "@/types/product";

export function useProducts() {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  console.log(data);
  

  useEffect(() => {
    getProducts()
      .then(setData)
      .catch(console.error)
      .then(() => setLoading(false));
  }, []);

  return { data, loading };
}

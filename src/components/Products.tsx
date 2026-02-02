// src/pages/Products.tsx
import ProductCard from "@/components/product/ProductCard";
import { useProducts } from "@/hooks/useProducts";

export default function Products() {
  const { data, loading } = useProducts();
  console.log(data);

  if (loading)
    return (
      <div className=" flex-center text-center py-10 rounded-md bg-slate-50 min-h-[300px]">
        <p>Đang tải sản phẩm...</p>
      </div>
    );

  return (
    <div className="grid grid-cols-1 gap-6 overflow-x-hidden">
      {data.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}

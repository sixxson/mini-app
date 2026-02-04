// src/pages/Products.tsx
import ProductCard from '@/components/product/ProductCard'
import { useProducts } from '@/hooks/useProduct'

export default function Products() {
    const { data, loading } = useProducts()
    console.log(data)

    if (loading)
        return (
            <div className=" flex-center text-center py-10 rounded-md bg-slate-50 min-h-[300px]">
                <p>Đang tải sản phẩm...</p>
            </div>
        )

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data.map((item) => (
                <ProductCard key={item.id} product={item} />
            ))}
        </div>
    )
}

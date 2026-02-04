import Button from '@/components/common/Button'
import { Product } from '@/types/product'
import { useNavigate } from 'zmp-ui'
import { useAtomValue } from 'jotai'
import { tokenState } from '@/state'

interface Props {
    product: Product
}

export default function ProductCard({ product }: Props) {
    const navigate = useNavigate()
    const token = useAtomValue(tokenState)

    const image = product.wc_data?.image

    const price = product.wc_data?.price
    const salePrice = product.wc_data?.sale_price
    const regularPrice = product.wc_data?.regular_price
    const currency = product.wc_data?.currency || 'VND'

    return (
        <div
            className="rounded-xl border p-4 bg-white flex flex-col cursor-pointer active:opacity-70 transition-opacity"
            onClick={() => navigate(`/product/${product.id}`)}
        >
            {/* Ảnh sản phẩm */}
            <div className="aspect-square bg-gray-100 rounded-lg mb-3">
                {image ? (
                    <img
                        src={image.url}
                        alt={image.alt || product.title.rendered}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">No image</div>
                )}
            </div>

            {/* Tên sản phẩm */}
            <h3
                className="font-semibold text-base line-clamp-2"
                dangerouslySetInnerHTML={{
                    __html: product.title.rendered || 'Không có tên',
                }}
            />

            {/* Mô tả ngắn */}
            {product.excerpt?.rendered && (
                <div
                    className="text-sm text-gray-600 mt-1 line-clamp-3"
                    dangerouslySetInnerHTML={{
                        __html: product.excerpt.rendered,
                    }}
                />
            )}

            {/* Giá */}
            {salePrice ? (
                <div className="flex items-center gap-2 mt-2">
                    <span className="text-red-600 font-bold">
                        {Number(salePrice).toLocaleString('vi-VN')} {currency}
                    </span>
                    {regularPrice && (
                        <span className="line-through text-gray-400 text-sm">
                            {Number(regularPrice).toLocaleString('vi-VN')} {currency}
                        </span>
                    )}
                </div>
            ) : price ? (
                <div className="mt-2 font-bold">
                    {Number(price).toLocaleString('vi-VN')} {currency}
                </div>
            ) : (
                <div className="mt-2 text-sm text-gray-400">Liên hệ</div>
            )}

            {/* Hành động */}
            <div className="mt-auto pt-4 flex gap-2">
                <Button
                    className="flex-1"
                    onClick={(e) => {
                        e.stopPropagation()
                        if (!token) {
                            navigate('/login')
                            return
                        }
                        // Handle buy now logic here
                    }}
                >
                    Mua ngay
                </Button>
            </div>
        </div>
    )
}

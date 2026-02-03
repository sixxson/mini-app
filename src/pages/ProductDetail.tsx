import React, { useMemo } from "react";
import { Page, Header, Box, Text, Button, Swiper, useNavigate } from "zmp-ui";
import { useParams } from "react-router-dom";
import { useProducts } from "@/hooks/useProducts";
import { useAtomValue } from "jotai";
import { tokenState } from "@/state";

const ProductDetail = () => {
  const { id } = useParams();
  const { data: products, loading } = useProducts();
  const token = useAtomValue(tokenState);
  const navigate = useNavigate();

  const product = useMemo(() => {
    return products.find((p) => p.id === Number(id));
  }, [products, id]);

  const gallery = product?.wc_data?.gallery || [];
  const mainImage = product?.wc_data?.image;

  // Kết hợp ảnh chính và gallery
  const allImages = useMemo(() => {
    if (!product) return [];
    const images = [...gallery];
    if (mainImage && !gallery.find(img => img.url === mainImage.url)) {
        images.unshift(mainImage);
    }
    return images;
  }, [product, gallery, mainImage]);

  if (loading) {
    return (
      <Page>
        <Header title="Chi tiết sản phẩm" />
        <Box className="p-4 flex justify-center items-center h-full">
          <Text>Đang tải...</Text>
        </Box>
      </Page>
    );
  }

  if (!product) {
    return (
      <Page>
        <Header title="Chi tiết sản phẩm" />
        <Box className="p-4">
          <Text>Không tìm thấy sản phẩm</Text>
        </Box>
      </Page>
    );
  }

  const price = product.wc_data?.price;
  const salePrice = product.wc_data?.sale_price;
  const regularPrice = product.wc_data?.regular_price;
  const currency = product.wc_data?.currency || "VND";

  return (
    <Page className="bg-white">
      <Header title={product.title.rendered.replace(/&#8211;/g, '-').replace(/&nbsp;/g, ' ')} />
      
      <Box className="w-full bg-gray-100 ">
        {allImages.length > 0 ? (
          <Swiper dots>
            {allImages.map((img, index) => (
              <Swiper.Slide key={index}>
                <div className="aspect-square w-full">
                  <img
                    src={img.url}
                    alt={img.alt || product.title.rendered}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Swiper.Slide>
            ))}
          </Swiper>
        ) : (
          <div className="aspect-square w-full flex items-center justify-center text-gray-400">
            No image
          </div>
        )}
      </Box>

      <Box className="p-4 pb-32">
        <Text.Title size="small" className="mb-2">Mô tả sản phẩm</Text.Title>
        <Box 
          className="text-gray-600 detail-content"
          dangerouslySetInnerHTML={{ __html: product.content.rendered || product.excerpt.rendered || "Đang cập nhật..." }}
        />
      </Box>

      <Box className="fixed bottom-[56px] left-0 right-0 p-3 bg-white border-t flex items-center justify-between gap-4 z-50">
        <div className="flex flex-col flex-1">
          {salePrice ? (
            <>
              <Text className="text-red-600 font-bold text-lg leading-tight">
                {Number(salePrice).toLocaleString("vi-VN")} {currency}
              </Text>
              {regularPrice && (
                <Text size="small" className="line-through text-gray-400 leading-tight">
                  {Number(regularPrice).toLocaleString("vi-VN")} {currency}
                </Text>
              )}
            </>
          ) : price ? (
            <Text className="font-bold text-lg">
              {Number(price).toLocaleString("vi-VN")} {currency}
            </Text>
          ) : (
            <Text className="text-gray-400">Liên hệ</Text>
          )}
        </div>
        <Button 
          className="px-8 min-w-[120px]"
          onClick={() => {
            if (!token) {
              navigate("/login");
              return;
            }
            // Handle buy now logic here
          }}
        >
          Mua ngay
        </Button>
      </Box>
    </Page>
  );
};

export default ProductDetail;

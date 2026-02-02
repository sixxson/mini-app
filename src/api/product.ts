import { Product } from "@/types/product";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(
    "https://visante.webcanhcam.vn/wp-json/wp/v2/product"
  );

  if (!res.ok) {
    throw new Error("Lỗi lấy danh sách product");
  }

  
  return res.json();
}

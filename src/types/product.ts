// src/types/product.ts

export interface Product {
  // ===== Thông tin thời gian =====
  date: string | null; // ngày xuất bản (local)
  date_gmt: string | null; // ngày xuất bản (GMT)

  modified: string; // ngày sửa gần nhất (local)
  modified_gmt: string; // ngày sửa gần nhất (GMT)

  // ===== Định danh =====
  id: number; // ID bài viết
  slug: string; // slug
  status: ProductStatus; // trạng thái
  type: string; // post type (product)

  // ===== URL =====
  link: string; // link frontend

  // ===== GUID =====
  guid: {
    raw: string;
    rendered: string;
  };

  // ===== Bảo mật =====
  password?: string; // mật khẩu (nếu có)

  // ===== Permalink =====
  permalink_template?: string;
  generated_slug?: string;

  // ===== Class HTML =====
  class_list?: string[];

  // ===== Nội dung =====
  title: RenderedField;
  content: ContentField;
  excerpt: ProtectedField;

  // ===== Media =====
  featured_media: number; // ID ảnh đại diện

  // ===== Bình luận =====
  comment_status: "open" | "closed";
  ping_status: "open" | "closed";

  // ===== Meta =====
  meta: Record<string, any>;

  // ===== Template =====
  template?: string;

  // ===== Taxonomy =====
  product_cat: number[]; // category ID
  product_tag: number[]; // tag ID

  // ===== WooCommerce =====
  wc_data?: WooCommerceData; // giá + hình ảnh
}

// Trường HTML render từ WordPress
export interface RenderedField {
  raw?: string;
  rendered: string;
}

// Content có block version
export interface ContentField extends RenderedField {
  block_version?: number;
  protected?: boolean;
}

// Excerpt / protected field
export interface ProtectedField extends RenderedField {
  protected?: boolean;
}

export type ProductStatus =
  | "publish"
  | "future"
  | "draft"
  | "pending"
  | "private"
  | "acf-disabled"
  | "wc-pending"
  | "wc-processing"
  | "wc-on-hold"
  | "wc-completed"
  | "wc-cancelled"
  | "wc-refunded"
  | "wc-failed"
  | "wc-checkout-draft";

// src/types/woocommerce.ts

export interface WooCommerceData {
  currency: string; // VD: "VND"

  price: string; // giá hiện tại (string từ API)
  regular_price: string; // giá gốc
  sale_price: string; // giá sale

  type: "simple" | "variable" | string; // loại sản phẩm

  // Ảnh đại diện
  image: {
    id: string;
    url: string;
    alt: string;
  };

  // Gallery ảnh
  gallery: Array<{
    id?: string;
    url: string;
    alt?: string;
  }>;
}

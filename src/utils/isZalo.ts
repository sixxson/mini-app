/**
 * Kiểm tra có đang chạy trong Zalo Mini App hay không
 */
export function isZaloMiniApp() {
  return !!(window as any).zmp;
}

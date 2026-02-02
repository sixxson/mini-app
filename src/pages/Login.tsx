import { useEffect, useState } from "react";
import { Button, Header, Page, Text, useNavigate } from "zmp-ui";
import { getUserInfo, getAccessToken } from "zmp-sdk/apis";
import { loginWithZalo, loginMock } from "@/api/auth";
import { isZaloMiniApp } from "@/utils/isZalo";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // 👉 Tự động chuyển trang nếu đã có token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");

      // ===== DEV MODE =====
      if (!isZaloMiniApp()) {
        const data = await loginMock();
        localStorage.setItem("token", data.token);
        window.location.replace("/");
        navigate("/", { replace: true }); // ✅ redirect ngay
        return;
      }

      // ===== ZALO MINI APP =====
      await getUserInfo({ avatarType: "normal" });

      const accessToken = await getAccessToken();
      if (!accessToken) {
        throw new Error("Không lấy được accessToken từ Zalo");
      }

      const data = await loginWithZalo({ accessToken });
      localStorage.setItem("token", data.token);

      navigate("/", { replace: true }); // ✅ redirect ngay
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Đăng nhập thất bại");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Page className="p-4 flex flex-col justify-center h-screen">
      <Header title="Đăng nhập" />

      <Text.Title size="large" className="mb-2">
        Đăng nhập
      </Text.Title>

      <Text className="mb-6 text-gray-500">Đăng nhập bằng tài khoản Zalo</Text>

      <Button fullWidth loading={loading} onClick={handleLogin}>
        Đăng nhập
      </Button>

      {error && <Text className="mt-4 text-red-500 text-sm">{error}</Text>}
    </Page>
  );
}

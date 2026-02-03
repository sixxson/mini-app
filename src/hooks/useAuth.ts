import { useState } from "react";
import { useSetAtom } from "jotai";
import { tokenState, userState } from "@/state";
import { login, loginMock, loginWithZalo } from "@/api/auth";
import { isZaloMiniApp } from "@/utils/isZalo";
import { toast } from "react-toastify";
import { useNavigate } from "zmp-ui";
import { getAccessToken, getUserInfo } from "zmp-sdk/apis";

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const setToken = useSetAtom(tokenState);
  const setUser = useSetAtom(userState);
  const navigate = useNavigate();

  const handleLogin = async (username: string) => {
    try {
      if (!username.trim()) {
        toast.error("Vui lòng nhập username");
        return;
      }

      setLoading(true);

      // ===== DEV MODE (BROWSER) =====
      if (!isZaloMiniApp()) {
        const data = await loginMock(username);
        setToken(data.token);
        setUser({
          id: `user_${Date.now()}`,
          name: username,
          avatar: "https://h5.zdn.vn/static/images/avatar.jpg"
        });
        navigate("/", { replace: true }); 
        return;
      }

      // ===== ZALO MINI APP (MANUAL LOGIN) =====
      const data = await login({ username });
      setToken(data.token);
      setUser({
        id: `user_${Date.now()}`,
        name: username,
        avatar: "https://h5.zdn.vn/static/images/avatar.jpg"
      });

      navigate("/", { replace: true }); 
    } catch (err: any) {
      console.error(err);
      toast.error(err.message || "Đăng nhập thất bại");
    } finally {
      setLoading(false);
    }
  };

  const handleZaloLogin = async () => {
    try {
      setLoading(true);

      // 1. Lấy thông tin user (Optional - chỉ để check hoặc hiển thị nếu cần)
      await new Promise((resolve, reject) => {
        getUserInfo({
          success: resolve,
          fail: reject,
        });
      });

      // 2. Lấy access token
      console.log("Đang gọi getAccessToken...");
      let accessToken = "";
      try {
        accessToken = await getAccessToken();
      } catch (tokenErr: any) {
        console.error("Lỗi thực thi getAccessToken:", tokenErr);
        throw new Error(`Zalo SDK Error: ${tokenErr.message || JSON.stringify(tokenErr)}`);
      }

      console.log("Access Token nhận được:", accessToken);
      
      if (!accessToken) {
        throw new Error("Không lấy được accessToken. Lưu ý: getAccessToken chỉ hoạt động trên Simulator của Zalo DevTools hoặc thiết bị thật. Nếu đang ở trình duyệt, vui lòng dùng Đăng nhập Username.");
      }

      // 3. Gọi API login
      const data = await loginWithZalo({ accessToken });
      setToken(data.token);

      // Có thể cập nhật lại user info từ Zalo sau khi login thành công
      getUserInfo({
        success: (res) => {
          setUser(res.userInfo as any);
        },
        fail: () => {}
      });

      navigate("/", { replace: true });
    } catch (err: any) {
      console.error("Lỗi Zalo Login:", err);
      toast.error(err.message || "Đăng nhập Zalo thất bại");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  return {
    loading,
    handleLogin,
    handleZaloLogin,
    logout
  };
}

import { getUserInfo, getAccessToken } from "zmp-sdk/apis";
import { loginWithZalo } from "@/api/auth";
import { toast } from "react-toastify";
import {
  Box,
  Button,
  Header,
  Page,
  Text,
  useNavigate,
} from "zmp-ui";

import Clock from "@/components/clock";
import bg from "@/static/bg.svg";
import { useEffect, useState } from "react";
import Products from "@/components/Products";

import { useAtom } from "jotai";
import { userState } from "@/state";
import { useAuth } from "@/hooks/useAuth";

function HomePage() {
  const [user, setUser] = useAtom(userState);
  const { logout, handleZaloLogin } = useAuth();
  const navigate = useNavigate();

  // Không tự động lấy thông tin Zalo ở đây để tránh ghi đè lên username thủ công khi reload
  // Chỉ lấy khi người dùng nhấn "Liên kết Zalo" (đã có trong handleZaloLogin của useAuth)
  useEffect(() => {
    console.log("Current user state:", user);
  }, [user]);

  return (
    <Page
      className="overflow-x-hidden bg-cover bg-center bg-no-repeat bg-white dark:bg-black max-h-screen"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <Header className="sticky" title="Trang chủ" />

      <Box className="">
      
        {user ? (
          <div className="mb-4 flex flex-col items-center text-center">
            <img
              src={user.avatar}
              alt="avatar"
              className="w-16 h-16 rounded-full mb-2"
            />
            <p>
              <b>Tên:</b> {user.name}
            </p>
            <p>
              <b>ID:</b> {user.id}
            </p>
            <Button onClick={logout}>Đăng xuất</Button>
          </div>
        ) : (
             <div className="mb-4 flex flex-col items-center text-center gap-2">
                <Text className="mb-1 text-gray-500">Tiếp cận nhiều tiện ích hơn</Text>
                <div className="flex gap-2">
                  <Button onClick={() => navigate("/login")}>Đăng nhập</Button>
                  <Button variant="secondary" onClick={handleZaloLogin}>Liên kết Zalo</Button>
                </div>
             </div>
        )}
      </Box>
      {/* <Box textAlign="center" className="space-y-1 ">
        <Text.Title size="xLarge">Hello world!</Text.Title>
        <Clock />
      </Box> */}
      <Box className="container max-h-screen">
        <Products />
      </Box>
    </Page>
  );
}

export default HomePage;

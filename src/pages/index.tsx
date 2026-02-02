import { getUserInfo, openMiniApp } from "zmp-sdk";
import {
  Box,
  Button,
  Header,
  Icon,
  Page,
  Text,
} from "zmp-ui";

import Clock from "@/components/clock";
import bg from "@/static/bg.svg";
import { useEffect, useState } from "react";
import Products from "@/components/Products";

function HomePage() {
  const [user, setUser] = useState<any>(null);

  // Lấy thông tin user Zalo
  useEffect(() => {
    getUserInfo({
      success: (res) => {
        setUser(res.userInfo);
      },
      fail: (err) => {
        console.error("Lỗi lấy user:", err);
      },
    });
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.replace("/login");
  };
  return (
    <Page
      className="bg-cover bg-center bg-no-repeat bg-white dark:bg-black max-h-screen"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <Header className="sticky" title="Trang chủ" />
      <Box className="">
        {user && (
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
        )}
      </Box>
      <Box textAlign="center" className="space-y-1 ">
        <Text.Title size="xLarge">Hello world!</Text.Title>
        <Clock />
      </Box>
      <Box className="container max-h-screen px-[15px] overflow-x-hidden">
        <Products />
      </Box>
    </Page>
  );
}

export default HomePage;

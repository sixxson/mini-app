import { useEffect, useState } from "react";
import { getSystemInfo } from "zmp-sdk";
import {
  App,
  SnackbarProvider,
  ZMPRouter,
  AnimationRoutes,
  Route,
} from "zmp-ui";
import { AppProps } from "zmp-ui/app";

import Login from "@/pages/Login";
import HomePage from "@/pages";
import Products from "./Products";

const Layout = () => {
  const [token, setToken] = useState<string | null>(null);

  // Lấy token khi app load
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  // Lắng nghe khi token thay đổi (login / logout)
  useEffect(() => {
    const onStorageChange = () => {
      setToken(localStorage.getItem("token"));
    };

    window.addEventListener("storage", onStorageChange);
    return () => window.removeEventListener("storage", onStorageChange);
  }, []);

  return (
    <App theme={getSystemInfo().zaloTheme as AppProps["theme"]}>
        <ZMPRouter>
          <AnimationRoutes>
            {!token ? (
              <Route path="*" element={<Login />} />
            ) : (
              <>
                <Route path="*" element={<HomePage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<Products />} />
              </>
            )}
            
          </AnimationRoutes>
        </ZMPRouter>
    </App>
  );
};

export default Layout;

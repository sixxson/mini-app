import React, { useState, useEffect } from "react";
import { BottomNavigation, Icon, useNavigate } from "zmp-ui";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const path = location.pathname;
    if (path === "/" || path === "/index") {
      setActiveTab("home");
    } else if (path.startsWith("/product")) {
      setActiveTab("products");
    } else if (path.includes("/profile")) {
        setActiveTab("profile");
    }
  }, [location.pathname]);

  return (
    <BottomNavigation
      
      className="sticky bottom-0 left-0 right-0 "
      activeKey={activeTab}
      onChange={(key) => {
        setActiveTab(key);
        if (key === "home") {
          navigate("/");
        } else if (key === "products") {
          navigate("/products");
        } else if (key === "profile") {
            // navigate("/profile"); 
        }
      }}
    >
      <BottomNavigation.Item
        key="home"
        label="Trang chủ"
        icon={<Icon icon="zi-home" />}
        activeIcon={<Icon icon="zi-home" />}
      />
      <BottomNavigation.Item
        key="products"
        label="Sản phẩm"
        icon={<Icon icon="zi-plus-circle" />}
        activeIcon={<Icon icon="zi-plus-circle" />}
      />
      <BottomNavigation.Item
        key="profile"
        label="Cá nhân"
        icon={<Icon icon="zi-user" />}
        activeIcon={<Icon icon="zi-user" />}
      />
    </BottomNavigation>
  );
};

export default Navigation;

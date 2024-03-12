import { Suspense } from "react";

import { Outlet } from "react-router-dom";
import NavBar from "../SideBar/NavBar";
import { LayoutWrapper, WrapperOutlet } from "./Layout.styled";

const Layout = () => {
  return (
    <LayoutWrapper>
      <NavBar />
      <WrapperOutlet>
        <Suspense fallback={<div>Loader</div>}>
          <Outlet />
        </Suspense>
      </WrapperOutlet>
    </LayoutWrapper>
  );
};

export default Layout;

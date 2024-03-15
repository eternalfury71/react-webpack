import React from "react";
import { ShowMenu } from "../../components/pages/Menu";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ShowMenu />
      {children}
    </>
  );
};

export default Layout;

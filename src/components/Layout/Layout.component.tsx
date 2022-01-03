import { ReactNode } from "react";

import Footer from "./Footer.component";
import Header from "./Header.component";

interface ILayoutProps {
  children?: ReactNode;
  title: string;
}

const Layout = ({ children, title }: ILayoutProps) => {
  return (
    <>
      <Header title={title} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

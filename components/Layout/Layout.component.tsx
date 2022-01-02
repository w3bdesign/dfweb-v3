import { ReactNode } from "react";

import Footer from "./Footer.component";
import Header from "./Header.component";

interface LayoutProps {
  children: ReactNode;
  title: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div>
      <Header title={title} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

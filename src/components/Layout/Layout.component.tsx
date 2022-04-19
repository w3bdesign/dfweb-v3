import { ReactNode } from "react";

import Footer from "./Footer.component";
import Header from "./Header.component";

export type TTitle =
  | "Forside"
  | "Kontakt"
  | "CV"
  | "Prosjekter"
  | "Feil - 500"
  | "Side ikke funnet - 404";

interface ILayoutProps {
  children?: ReactNode;
  title: TTitle;
}

/**
 * Renders layout for each page. Also passes along the title to the Header component.
 * @function Layout
 * @param {ReactNode} children - Children to be rendered by Layout component
 * @param {TTitle} title - Title for the page. Is set in <title>{title}</title>
 * @returns {JSX.Element} - Rendered component
 */

const Layout = ({ children, title }: ILayoutProps): JSX.Element => (
  <>
    <Header title={title} />
    {children}
    <Footer />
  </>
);

export default Layout;

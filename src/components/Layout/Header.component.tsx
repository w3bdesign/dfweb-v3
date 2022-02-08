import Head from "next/head";

import Navbar from "./Navbar.component";

interface IHeaderProps {
  title: string;
}

/**
 * Renders title for each page along with Navbar
 * @function Header
 * @param {string} title - Title for page
 * @returns {JSX.Element} - Rendered component
 */

const Header = ({ title }: IHeaderProps): JSX.Element => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <Navbar />
  </>
);

export default Header;

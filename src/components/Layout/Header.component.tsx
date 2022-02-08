import Head from "next/head";

import Navbar from "./Navbar.component";

interface IHeaderProps {
  title: string;
}

const Header = ({ title }: IHeaderProps): JSX.Element => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <Navbar />
  </>
);

export default Header;

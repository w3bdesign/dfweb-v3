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

const Header = ({ title }: IHeaderProps): JSX.Element => {
  const today = new Date();
  const todaysDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

  return (
    <>
      <Head>
        <title>{title}</title>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
        {
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "author": {
              "@type": "Person",
              "name": "Daniel",
              "url": "https://www.dfweb.no"
            },      
            "headline": "${title}",
            "image": [ "https://www.dfweb.no/logo.png"  ],
            "datePublished": "${todaysDate}",
            "dateModified": "${todaysDate}"
        }
          `
          }}
        />
      </Head>
      <Navbar />
    </>
  );
};

export default Header;

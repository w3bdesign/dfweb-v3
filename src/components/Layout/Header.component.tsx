import Head from "next/head";

import Navbar from "./Navbar.component";

type TTitle = "Forside" | "Kontakt" | "CV" | "Prosjekter";

interface IHeaderProps {
  title: TTitle;
}

/**
 * Renders title for each page along with Navbar
 * @function Header
 * @param {TTitle} title - Title for page. Limited to 4 titles to choose from.                         
 * @returns {JSX.Element} - Rendered component
 */

const Header = ({ title }: IHeaderProps): JSX.Element => {
  const today = new Date();
  const todaysDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  const fullTitle = `${title} - Portefølje - Dfweb`;

  return (
    <>
      <Head>
        <title>{fullTitle}</title>

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

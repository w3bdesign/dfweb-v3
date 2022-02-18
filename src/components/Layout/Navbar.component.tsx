import Link from "next/link";
import { useRouter } from "next/router";

import Hamburger from "./Hamburger.component";

import LINKS from "../../utils/constants/LINKS";

/**
 * Display the menu and the links
 * On mobile, we display a hamburger icon and include the Hamburger component
 * We reduce code duplication by fetching the links from Sanity and map over them
 * @function Navbar
 * @returns {JSX.Element} - Rendered component
 */
const Navbar = (): JSX.Element => {
  const router = useRouter();

  const activeLink = (url: string, pathname: string) =>
    pathname === url ? "navbar-link-active" : "";

  return (
    <header role="banner" aria-label="Header for logo og navigasjon">
      <nav className="fixed top-0 z-50 w-full p-4 bg-gray-800">
        <div
          id="main-navigation"
          data-cy="main-navigation"
          className="container flex items-center mx-auto md:flex-wrap lg:flex-wrap xl:flex-wrap">
          <div className="flex w-full text-white md:w-1/2 md:justify-start">
            <img src="/logo.svg" alt="Dfweb Logo" width="150" height="45" />
          </div>
          <div
            id="hamburger-div"
            data-cy="hamburger-div"
            className="flex content-center justify-between md:w-1/2 md:justify-end p-3">
            <Hamburger />
            <ul
              role="navigation"
              aria-label="Navigasjon"
              className="items-center justify-between flex-1 hidden list-reset md:flex lg:flex xl:flex lg:-mr-4 xl:-mr-4">
              {LINKS?.map((link) => (
                <li key={link.id} className="link mr-3">
                  {link.external ? (
                    <Link href={link.url} passHref>
                      <a
                        rel="noopener noreferrer"
                        aria-label={link.text}
                        target="_blank"
                        className="navbar-link inline-block text-xl text-white">
                        {link.text}
                      </a>
                    </Link>
                  ) : (
                    <Link href={link.url} passHref>
                      <a
                        aria-label={link.text}
                        className={`navbar-link eds-top-navigation-item inline-block text-xl text-white
                      ${activeLink(link.url, router.pathname)}

                      `}>
                        {link.text}
                      </a>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

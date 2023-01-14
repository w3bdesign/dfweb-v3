import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import MobileMenu from "./MobileMenu.component";

import LINKS from "../../utils/constants/LINKS";
import logo from "../../../public/logo.svg";

/**
 * Display the menu and the links
 * On mobile, we display a hamburger icon and include the Hamburger component
 * We reduce code duplication by fetching the links from Sanity and map over them
 * @function Navbar
 * @returns {JSX.Element} - Rendered component
 */
const Navbar = (): JSX.Element => {
  const router = useRouter();

  const activeLink = (url: string, pathname: string) => {
    if (pathname === url) {
      return "navbar-link-active";
    }
    return "";
  };

  return (
    <header aria-label="Header for logo og navigasjon">
      <nav className="fixed top-0 z-50 w-full p-4 bg-gray-800">
        <div
          id="main-navigation"
          data-cy="main-navigation"
          className="container flex items-center mx-auto md:flex-wrap lg:flex-wrap xl:flex-wrap">
          <div className="flex w-full text-white md:w-1/2 md:justify-start">
            <div className="relative w-[9.375rem] h-[3.125rem]">
              <Image alt="DFWeb logo" src={logo} fill priority />
            </div>
          </div>
          <div
            id="hamburger-div"
            data-cy="hamburger-div"
            className="flex content-center justify-between md:w-1/2 md:justify-end p-3">
            <MobileMenu />
            <ul
              aria-label="Navigasjon"
              className="items-center justify-between flex-1 hidden list-reset md:flex lg:flex xl:flex lg:-mr-4 xl:-mr-4">
              {LINKS.map(({ id, url, text, external }) => (
                <li key={id} className="link mr-3 md:mr-8 lg:mr-3">
                  {external ? (
                    <a
                      aria-label={text}
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="navbar-link inline-block text-xl text-white">
                      {text}
                    </a>
                  ) : (
                    <Link
                      href={url}
                      className={`navbar-link eds-top-navigation-item inline-block text-xl text-white ${activeLink(
                        url,
                        router.pathname
                      )}`}>
                      {text}
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

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import MobileMenu from "./MobileMenu.component";

import logo from "../../../public/logo.svg";

interface ILinks {
  Text: string;
  Url: string;
  id: number;
  External: boolean;
}

interface INavbarProps {
  links: ILinks[];
}

/**
 * Display the menu and the links
 * On mobile, we display a hamburger icon and include the Hamburger component
 * We reduce code duplication by fetching the links from Sanity and map over them
 * @function Navbar
 * @returns {JSX.Element} - Rendered component
 */
const Navbar = ({ links }: INavbarProps) => {
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
          className="container flex items-center mx-auto md:flex-wrap lg:flex-wrap xl:flex-wrap"
        >
          <div className="flex w-full text-white md:w-1/2 md:justify-start">
            <div className="relative w-[9.375rem] h-[3.125rem]">
              <Image alt="DFWeb logo" src={logo} fill priority />
            </div>
          </div>
          <div
            id="hamburger-div"
            data-cy="hamburger-div"
            className="flex content-center justify-between md:w-1/2 md:justify-end p-3"
          >
            <MobileMenu links={links} />
            <ul
              aria-label="Navigasjon"
              className="items-center justify-between flex-1 hidden list-reset md:flex lg:flex xl:flex lg:-mr-4 xl:-mr-4"
            >
              {links.map(({ id, Text, Url, External }) => (
                <li key={id} className="link mr-3 md:mr-8 lg:mr-3">
                  {External ? (
                    <a
                      aria-label={Text}
                      data-testid={Text}
                      href={Url}
                      target="_blank"
                      rel="noreferrer"
                      className="navbar-link inline-block text-xl text-white"
                    >
                      {Text}
                    </a>
                  ) : (
                    <Link
                      href={Url}
                      data-testid={Text}
                      className={`navbar-link eds-top-navigation-item inline-block text-xl text-white ${activeLink(
                        Url,
                        router.pathname
                      )}`}
                    >
                      {Text}
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

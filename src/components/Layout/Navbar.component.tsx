import Link from "next/link";
import Image from "next/image";

import Hamburger from "./Hamburger.component";

import LINKS from "../../utils/constants/LINKS";

/**
 * Display the menu and the links
 * On mobile, we display a hamburger icon and include the Hamburger component
 * We reduce code duplication by loading the links from a JSON object and map over it
 */

const Navbar = (): JSX.Element => {
  // https://stackoverflow.com/questions/59273754/how-can-i-assign-a-new-ref-to-every-iteration-inside-a-map-function
  // TODO Vurder å bruke gsap på mouseenter?
  return (
    <header role="banner" aria-label="Header for logo og navigasjon">
      <nav className="fixed top-0 z-50 w-full p-4 bg-gray-800">
        <div
          id="main-navigation"
          data-cy="main-navigation"
          className="container flex items-center mx-auto md:flex-wrap lg:flex-wrap xl:flex-wrap">
          <div className="flex w-full font-extrabold text-white md:w-1/2 md:justify-start">
            <Image src="/logo.svg" alt="Dfweb Logo" width={150} height={45} priority />
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






<div className="svg-wrapper">
  <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
    <rect className="shape" height="60" width="320" />
    <text x="60" y="55" className="text">LINK HERE</text>
  </svg>
</div>









              {LINKS.map((link) => (
                <li key={link.id} className="mr-3">
                  {link.external ? (
                    <Link href={link.url}>
                      <a
                        rel="noopener noreferrer"
                        aria-label={link.text}
                        target="_blank"
                        className="inline-block text-xl text-white transition ease-in-out duration-300  border-b-4 border-transparent hover:border-white">
                        {link.text}
                      </a>
                    </Link>
                  ) : (
                    <Link href={link.url}>
                      <a
                        aria-label={link.text}
                        className="inline-block text-xl text-white transition ease-in-out duration-300 border-b-4 border-transparent hover:border-white">
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

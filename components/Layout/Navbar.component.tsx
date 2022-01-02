import Link from "next/link";

import LINKS from "../../constants/LINKS";

/**
 * Display the menu and the links
 * On mobile, we display a hamburger icon and include the Hamburger component
 * We reduce code duplication by loading the links from a JSON object and map over it
 */

function Navbar() {
  return (
    <header role="banner" aria-label="Header for logo og navigasjon">
      <nav className="fixed top-0 z-50 w-full p-2 bg-gray-800">
        <div
          id="main-navigation"
          data-cy="main-navigation"
          className="container flex items-center mx-auto md:flex-wrap lg:flex-wrap xl:flex-wrap">
          AppLogo placeholder
          <div
            id="hamburger-div"
            data-cy="hamburger-div"
            className="flex content-center justify-between md:w-1/2 md:justify-end p-3">
            Hamburger placeholder
            <ul
              role="navigation"
              aria-label="Navigasjon"
              className="items-center justify-between flex-1 hidden list-reset md:flex lg:flex xl:flex lg:-mr-4 xl:-mr-4">
              {LINKS.map((link) => (
                <li key={link.id} className="mr-3 animate-link">
                  {link.external ? (
                    <Link
                      aria-label={link.text}
                      href={link.url}
                      // rel="noopener noreferrer"
                      // target="_blank"
                    >
                      <a className="inline-block text-xl text-white text">{link.text}</a>
                    </Link>
                  ) : (
                    <Link href={link.url}>
                      <a className="inline-block text-xl text-white text">{link.text}</a>
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
}

export default Navbar;

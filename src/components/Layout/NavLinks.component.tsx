import Link from "next/link";

import LINKS from "../../utils/constants/LINKS";

/**
 * Display the links
 * @function NavBar
 * @returns {JSX.Element} - Rendered component
 */

const NavLinks = (): JSX.Element => (
  <ul
    role="navigation"
    aria-label="Navigasjon"
    className="items-center justify-between flex-1 hidden list-reset md:flex lg:flex xl:flex lg:-mr-4 xl:-mr-4">
    {LINKS?.map((link) => (
      <li key={link.id} className="link mr-3">
        {link.external && (
          <Link href={link.url} passHref>
            <a
              rel="noopener noreferrer"
              aria-label={link.text}
              target="_blank"
              className="navbar-link inline-block text-xl text-white">
              {link.text}
            </a>
          </Link>
        )}
        {!link.external && (
          <Link href={link.url} passHref>
            <a
              aria-label={link.text}
              className="navbar-link eds-top-navigation-item  inline-block text-xl text-white">
              {link.text}
            </a>
          </Link>
        )}
      </li>
    ))}
  </ul>
);

export default NavLinks;

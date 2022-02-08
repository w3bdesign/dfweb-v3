import Image from "../UI/Image.component";
import Hamburger from "./Hamburger.component";
import NavLinks from "./NavLinks.component";

/**
 * Display the menu and the links
 * On mobile, we display a hamburger icon and include the Hamburger component
 * We reduce code duplication by fetching the links from Sanity and map over them
 * @function Navbar
 * @returns {JSX.Element} - Rendered component
 */
const Navbar = (): JSX.Element => (
  <header role="banner" aria-label="Header for logo og navigasjon">
    <nav className="fixed top-0 z-50 w-full p-4 bg-gray-800">
      <div
        id="main-navigation"
        data-cy="main-navigation"
        className="container flex items-center mx-auto md:flex-wrap lg:flex-wrap xl:flex-wrap">
        <div className="flex w-full font-extrabold text-white md:w-1/2 md:justify-start">
          <Image src="/logo.svg" alt="Dfweb Logo" width={150} height={45} />
        </div>
        <div
          id="hamburger-div"
          data-cy="hamburger-div"
          className="flex content-center justify-between md:w-1/2 md:justify-end p-3">
          <Hamburger />
          <NavLinks />
        </div>
      </div>
    </nav>
  </header>
);

export default Navbar;

import { IconContext } from "react-icons";
import { BiCopyright } from "react-icons/bi";

/**
 * Renders the footer for the application
 * @function Footer
 * @returns {JSX.Element} - Rendered Hamburger component
 */

const Footer = (): JSX.Element => (
  <footer
    className="mt-80 sm:mt-4"
    aria-label="Innholdet for bunnteksten med copyright"
    data-testid="footer"
  >
    <div className="mt-10 bg-gray-800 shadow">
      <div
        aria-label="Copyright tekst"
        className="w-full mx-auto p-6 text-center text-white font-semibold inline-block"
      >
        Copyright Daniel Fjeldstad
        <IconContext.Provider value={{ className: "inline-block m-2" }}>
          <BiCopyright size="1.2em" />
        </IconContext.Provider>
        {new Date().getFullYear()}
      </div>
    </div>
  </footer>
);

export default Footer;

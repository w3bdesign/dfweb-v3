import { useRef } from "react";
import { useClickAway } from "react-use";
import Link from "next/link";

import { AnimatePresence, useCycle, motion } from "framer-motion";

import LINKS from "../../utils/constants/LINKS";

import Hamburger from "./Hamburger.component";

/**
 * Renders the mobile menu.
 * Animates the X when clicked, and animates the menu items with Framer Motion
 * @function MobileMenu
 * @returns {JSX.Element} - Rendered component
 */

const MobileMenu = (): JSX.Element => {
  const [isExpanded, setisExpanded] = useCycle<boolean>(false, true);
  const ref = useRef(null);

  const handleClickOutside = () => {
    setisExpanded(0);
  };

  useClickAway(ref, handleClickOutside);

  const itemVariants = {
    closed: {
      opacity: 0
    },
    open: { opacity: 1 }
  };

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.3,
        staggerDirection: -1
      }
    },
    open: {
      transition: {
        staggerChildren: 0.3,
        staggerDirection: 1
      }
    }
  };

  return (
    <div ref={ref} className="z-50 md:hidden lg:hidden xl:hidden" data-testid="mobilemenu">
      <Hamburger onClick={setisExpanded} animatetoX={isExpanded} />
      <div
        id="mobile-menu"
        data-testid="mobile-menu"
        data-cy="mobile-menu"
        aria-hidden={!isExpanded}
        className="absolute right-0 w-full text-center bg-gray-800 mt-4 w-30">
        <AnimatePresence>
          {isExpanded && (
            <motion.aside
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: 310,
                opacity: 1,
                transition: { delay: 0.15, duration: 1.6, ease: "easeInOut" }
              }}
              exit={{
                height: 0,
                transition: { delay: 0.15, duration: 1.6, ease: "easeInOut" }
              }}>
              <nav aria-label="Navigasjon">
                <motion.div initial="closed" animate="open" exit="closed" variants={sideVariants}>
                  <ul>
                    {LINKS.map((link) => (
                      <motion.li
                        key={link.url}
                        className="block p-4 text-xl text-white hover:underline mx-auto text-center border-t border-b border-gray-600 border-solid shadow"
                        data-cy="mobile-menu-item"
                        variants={itemVariants}>
                        {link.external ? (
                          <a
                            aria-label={link.text}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            data-testid={`mobil-${link.text}`}>
                            {link.text}
                          </a>
                        ) : (
                          <Link data-testid={`mobil-${link.text}`} href={link.url}>
                            {link.text}
                          </Link>
                        )}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </nav>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MobileMenu;

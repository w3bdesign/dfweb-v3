import Link from "next/link";
import React, { useState, useRef, useCallback } from "react";

import LINKS from "../../utils/constants/LINKS";

import useIsomorphicLayoutEffect from "../../hooks/useIsomorphicLayoutEffect";

import FadeLeftToRight from "../Animations/FadeLeftToRight.component";
import FadeLeftToRightItem from "../Animations/FadeLeftToRightItem.component";
import Hamburger from "./Hamburger.component";

/**
 * Renders the mobile menu.
 * Animates the X when clicked, and animates the menu items with Framer Motion
 * @function MobileMenu
 * @returns {JSX.Element} - Rendered component
 */

const MobileMenu = (): JSX.Element => {
  const [isExpanded, setisExpanded] = useState<boolean>(false);
  const [hidden, setHidden] = useState<string>("invisible");
  const node = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent): void => {
    if (node.current?.contains(e.target as Node)) {
      /**
       * Do nothing if we clicked inside the menu (but not the link item)
       */
      return;
    }

    setisExpanded(false);
  };

  const handleMobileMenuClick = useCallback(() => {
    /**
     * Anti-pattern: setisExpanded(!isExpanded)
     * Even if your state updates are batched and multiple updates to the enabled/disabled state are made together
     * each update will rely on the correct previous state so that you always end up with the result you expect.
     */
    setisExpanded((prevExpanded: boolean) => !prevExpanded);
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (isExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
      setHidden("");
    } else {
      setTimeout(() => {
        setHidden("invisible");
      }, 2000);

      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isExpanded]);

  return (
    <div ref={node} className="z-50 md:hidden lg:hidden xl:hidden" data-testid="mobilemenu">
      <Hamburger onClick={handleMobileMenuClick} animatetoX={isExpanded} />
      <FadeLeftToRight delay={0.05} staggerDelay={0.4} animateNotReverse={isExpanded}>
        <div
          id="mobile-menu"
          data-testid="mobile-menu"
          data-cy="mobile-menu"
          aria-hidden={!isExpanded}
          className={`absolute right-0 w-full text-center bg-gray-800 mt-4 w-30 ${hidden}`}
        >
          <nav aria-label="Navigasjon">
            {LINKS.map((link) => (
              <FadeLeftToRightItem key={link.id} cssClass="block">
                <div
                  data-cy="mobile-menu-item"
                  className="border-t border-gray-600 border-solid shadow"
                >
                  {link.external ? (
                    <a
                      className="inline-block m-4 text-xl text-white hover:underline"
                      aria-label={link.text}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      data-testid={`mobil-${link.text}`}
                    >
                      {link.text}
                    </a>
                  ) : (
                    <Link
                      data-testid={`mobil-${link.text}`}
                      href={link.url}
                      className="inline-block m-4 text-xl text-white hover:underline"
                    >
                      {link.text}
                    </Link>
                  )}
                </div>
              </FadeLeftToRightItem>
            ))}
          </nav>
        </div>
      </FadeLeftToRight>
    </div>
  );
};

export default MobileMenu;

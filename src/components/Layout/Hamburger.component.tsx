import React, { useState, useRef } from "react";
import Link from "next/link";

import LINKS from "../../utils/constants/LINKS";

import useIsomorphicLayoutEffect from "../../hooks/useIsomorphicLayoutEffect";

import FadeLeftToRight from "../Animations/FadeLeftToRight.component";
import FadeLeftToRightItem from "../Animations/FadeLeftToRightItem.component";

/**
 * Renders Hamburger for responsive menu
 * @function Hamburger
 * @returns {JSX.Element} - Rendered component
 */

const Hamburger = (): JSX.Element => {
  const [isExpanded, setisExpanded] = useState<boolean>(false);

  const hamburgerLine =
    "h-1 w-10 my-1 rounded-full bg-white transition ease transform duration-300 not-sr-only";

  const opacityFull = "opacity-100 group-hover:opacity-100";

  const node = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent): void => {
    if (node.current?.contains(e.target as Node)) {
      /**
       * Clicked inside of the menu
       */
      return;
    }
    /**
     * Clicked outside of the menu
     */

    setisExpanded(false);
  };

  const handleMobileMenuClick = (): void => {
    /**
     * Anti-pattern: setisExpanded(!isExpanded)
     * Even if your state updates are batched and multiple updates to the enabled/disabled state are made together
     * each update will rely on the correct previous state so that you always end up with the result you expect.
     */
    setisExpanded((prevExpanded) => !prevExpanded);
  };

  useIsomorphicLayoutEffect(() => {
    if (isExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isExpanded]);

  return (
    <div ref={node} className="z-50 md:hidden lg:hidden xl:hidden">
      <button
        className="flex flex-col w-16 rounded justify-center items-center group "
        data-cy="hamburger"
        data-testid="hamburger"
        onClick={handleMobileMenuClick}
        aria-expanded={isExpanded}
        type="button"
      >
        <span className="sr-only text-white text-2xl">Hamburger</span>
        <span
          className={`${hamburgerLine} ${
            isExpanded ? "rotate-45 translate-y-3 opacity-100 group-hover:opacity-100" : opacityFull
          }`}
        />
        <span className={`${hamburgerLine} ${isExpanded ? "opacity-0" : opacityFull}`} />
        <span
          className={`${hamburgerLine} ${
            isExpanded
              ? "-rotate-45 -translate-y-3 opacity-100 group-hover:opacity-100"
              : opacityFull
          }`}
        />
      </button>
      {/*
       * Start the mobile menu initially as hidden, then remove hidden class if we have clicked on the mobile menu
       */}

      <FadeLeftToRight delay={0.2} staggerDelay={0.2} animateNotReverse={isExpanded}>
        <div
          id="mobile-menu"
          data-testid="mobile-menu"
          aria-hidden={!isExpanded}
          className={`absolute right-0 w-full text-center bg-gray-800 mt-4 w-30 ${
            !isExpanded ? "hidden" : ""
          }`}
        >
          <ul aria-label="Navigasjon">
            {LINKS.map((link) => (
              <FadeLeftToRightItem key={link.id} cssClass="block">
                <li className="menu-item w-full border-t border-gray-600 border-solid shadow">
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
                    <Link data-testid={`mobil-${link.text}`} href={link.url} passHref>
                      <a className="inline-block m-4 text-xl text-white hover:underline">
                        {link.text}
                      </a>
                    </Link>
                  )}
                </li>
              </FadeLeftToRightItem>
            ))}
          </ul>
        </div>
      </FadeLeftToRight>
    </div>
  );
};

export default Hamburger;

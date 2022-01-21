import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import classNames from "classnames";

import LINKS from "../../utils/constants/LINKS";

const Hamburger = (): JSX.Element => {
  const [isExpanded, setisExpanded] = useState(false);
  const [isInitialRender, setisInitialRender] = useState(true);
  const hamburgerLine =
    "h-1 w-10 my-1 rounded-full bg-white transition ease transform duration-300 not-sr-only";

  const fadeInUpCSS = classNames("absolute right-0 w-full text-center bg-gray-800 mt-4 w-30", {
    "animate__animated animate__fadeInUp": isExpanded,
    "animate__animated animate__fadeOutDown": !isExpanded
  });

  const node = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: { target: any }) => {
    if (node.current && node.current.contains(e.target)) {
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

  const handleMobileMenuClick = () => {
    /**
     * Anti-pattern: setisExpanded(!isExpanded)
     * Even if your state updates are batched and multiple updates to the enabled/disabled state are made together
     * each update will rely on the correct previous state so that you always end up with the result you expect.
     */
    setisExpanded((prevExpanded) => !prevExpanded);
    setisInitialRender(false);
  };

  useEffect(() => {
    /**
     * Add the event listeners so we can close the menu when we click outside the mobile menu
     * Eslint doesnt like it if I use a ternary here
     */

    if (isExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    /**
     * Cleanup
     */
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isExpanded]);

  return (
    <div ref={node} className="z-50 md:hidden lg:hidden xl:hidden">
      <button
        className="flex flex-col w-16 rounded justify-center items-center group"
        data-cy="hamburger"
        data-testid="hamburger"
        onClick={handleMobileMenuClick}
        aria-expanded={isExpanded}
        type="button">
        <span className="sr-only text-white text-2xl">Hamburger</span>
        <span
          className={`${hamburgerLine} ${
            isExpanded
              ? "rotate-45 translate-y-3 opacity-100 group-hover:opacity-100"
              : "opacity-100 group-hover:opacity-100"
          }`}
        />
        <span
          className={`${hamburgerLine} ${
            isExpanded ? "opacity-0" : "opacity-100 group-hover:opacity-100"
          }`}
        />
        <span
          className={`${hamburgerLine} ${
            isExpanded
              ? "-rotate-45 -translate-y-3 opacity-100 group-hover:opacity-100"
              : "opacity-100 group-hover:opacity-100"
          }`}
        />
      </button>
      {/* 
        Start the mobile menu initially as hidden, then remove hidden class if we have clicked on the mobile menu
        Add Animate.css animation classes once we click on the mobile menu
        */}
      <div
        id="mobile-menu"
        data-testid="mobile-menu"
        aria-hidden={isInitialRender}
        hidden={isInitialRender}
        className={fadeInUpCSS}>
        <ul aria-label="Navigasjon">
          {LINKS.map((link) => (
            <li key={link.id} className="w-full border-t border-gray-600 border-solid shadow">
              {link.external ? (
                <a
                  className="inline-block m-4 text-xl text-white hover:underline"
                  aria-label={link.text}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  data-testid={`mobil-${link.text}`}>
                  {link.text}
                </a>
              ) : (
                <Link data-testid={`mobil-${link.text}`} href={link.url}>
                  <a className="inline-block m-4 text-xl text-white hover:underline">
                    {" "}
                    {link.text}
                  </a>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;

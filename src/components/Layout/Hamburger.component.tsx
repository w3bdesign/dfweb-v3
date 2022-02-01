import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

import LINKS from "../../utils/constants/LINKS";

import useIsomorphicLayoutEffect from "../../hooks/useIsomorphicLayoutEffect";

interface ITimeline {
  current: gsap.core.Timeline | null;
}

const Hamburger = (): JSX.Element => {
  const [isExpanded, setisExpanded] = useState(false);

  const hamburgerLine =
    "h-1 w-10 my-1 rounded-full bg-white transition ease transform duration-300 not-sr-only";

  const opacityFull = "opacity-100 group-hover:opacity-100";

  const node = useRef<HTMLDivElement>(null);

  const timeline: ITimeline = useRef(null);

  useIsomorphicLayoutEffect(() => {
    timeline.current = gsap
      .timeline({
        paused: true,
        defaults: { ease: "back" }
      })
      .fromTo(
        "#mobile-menu",
        { opacity: 0, duration: 1 },
        { opacity: 1, duration: 0.5, autoAlpha: 1 },
        0
      )
      .fromTo(
        ".menu-item",
        { opacity: 0, y: "0.5em", stagger: 0.2, duration: 0.4 },
        { opacity: 1, y: "0em", stagger: 0.2, duration: 0.4 }
      );
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (isExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
      timeline.current?.play();
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      timeline.current?.reverse();
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isExpanded]);

  const handleClickOutside = (e: { target: any }) => {
    if (node.current?.contains(e.target)) {
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
  };

  return (
    <div ref={node} className="z-50 md:hidden lg:hidden xl:hidden">
      <button
        className="flex flex-col w-16 rounded justify-center items-center group "
        data-cy="hamburger"
        data-testid="hamburger"
        onClick={handleMobileMenuClick}
        aria-expanded={isExpanded}
        type="button">
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
      <div
        id="mobile-menu"
        data-testid="mobile-menu"
        aria-hidden={!isExpanded}
        className="absolute right-0 w-full text-center bg-gray-800 mt-4 w-30 invisible">
        <ul aria-label="Navigasjon">
          {LINKS.map((link) => (
            <li
              key={link.id}
              className="menu-item w-full border-t border-gray-600 border-solid shadow">
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
                  <a className="inline-block m-4 text-xl text-white hover:underline">{link.text}</a>
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

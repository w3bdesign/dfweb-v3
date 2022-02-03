import Link from "next/link";
import { gsap } from "gsap";

import Image from "../UI/Image.component";
import Hamburger from "./Hamburger.component";
import useIsomorphicLayoutEffect from "../../hooks/useIsomorphicLayoutEffect";

import LINKS from "../../utils/constants/LINKS";
import { useRef } from "react";

interface ITimeline {
  current: gsap.core.Timeline | null;
}

/**
 * Display the menu and the links
 * On mobile, we display a hamburger icon and include the Hamburger component
 * We reduce code duplication by loading the links from a JSON object and map over it
 */

const Navbar = (): JSX.Element => {
  // https://github.com/w3bdesign/cool-gsap-animations

  //const navItems = gsap.utils.toArray(".navbar-link");
  //const navItems = document.querySelectorAll(".link"); 

  /**
   *  
   * 
   * https://developer.entur.org/
   * 
   * .eds-top-navigation-item:hover::after {
	    width: 2rem;
      }

      .eds-top-navigation-item::after {
	content: "";
	display: block;
	bottom: 1rem;
	height: .1875rem;
	width: 0;
	margin: 0 auto;
	opacity: var(--show-active-line);
	background: #ff5959;
	transition: width .2s ease-in-out,opacity .2s ease-in-out;
}







   * 
   * 
   * 


  // https://greensock.com/forums/topic/27697-onmouseenter-and-leave-on-the-array-in-react/
  // https://greensock.com/forums/topic/27137-flip-with-react/
  // https://stackoverflow.com/questions/69019253/display-image-dynamically-on-hover-on-title-with-nextjs-and-gsap
  */


  const navItems: any = useRef();

  const test = gsap.utils.selector(navItems);



  const timeline: ITimeline = useRef(null);

  const animateHoverEnter = (test: any) => {
    console.log(timeline.current)
    //timeline.current?.play();
  };

  useIsomorphicLayoutEffect(() => {
    const navItems = gsap.utils.toArray(".link");
    navItems.forEach(function (item: any, index: any) {
      timeline.current = gsap.timeline({ paused: true }).to(
        test(".navbar-link"),
        {
          color: "white",
          //x: 10,
          scale: 1.3,
          transformOrigin: "left center",
          autoAlpha: 1
        },
        0
      );

      

      //item.addEventListener("mouseenter", () => timeline.current.play());
     // item.addEventListener("mouseleave", () => timeline.current.reverse());
    });
    //.to(item.querySelector(".dot"), { backgroundColor: "#F93", scale: 1.5 }, 0);

    // item.addEventListener("mouseenter", () => tl.play());
    //  item.addEventListener("mouseleave", () => tl.reverse());
    //});
  }, []);

  return (
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
            <ul
            ref={navItems}
              role="navigation"
              aria-label="Navigasjon"
              className="items-center justify-between flex-1 hidden list-reset md:flex lg:flex xl:flex lg:-mr-4 xl:-mr-4">
              {LINKS?.map((link) => (
                <li key={link.id} className="link mr-3">
                  {link.external ? (
                    <Link href={link.url}>
                      <a
                        rel="noopener noreferrer"
                        aria-label={link.text}
                        target="_blank"
                        className="navbar-link inline-block text-xl text-white">
                        {link.text}
                      </a>
                    </Link>
                  ) : (
                    <Link href={link.url}>
                      <a
                        aria-label={link.text}
                        className="navbar-link inline-block text-xl text-white"
                        onMouseEnter={() => timeline.current?.play()}
                        onMouseLeave={() => timeline.current?.reverse()}
                      >
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

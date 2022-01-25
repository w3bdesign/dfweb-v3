import { gsap } from "gsap";
import { useEffect, useRef } from "react";

import { FaReact, FaVuejs, FaPhp } from "react-icons/fa";
import { SiTypescript, SiWordpress } from "react-icons/si";

type TTimeLineRef = HTMLDivElement | null;

const Hero = (): JSX.Element => {
  const animateRef = useRef<TTimeLineRef>(null);

  // wait until DOM has been rendered
  useEffect(() => {
    gsap
      .timeline()
      .from(animateRef.current, {
        scale: 0.6,
        duration: 1.5,
        opacity: 0,
        ease: "Expo.easeOut",
        delay: 0.2
      })
      .to(
        ".text-reveal",
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          stagger: 0.7,
          duration: 0.3,
          y: 0
        },
        "-=0.5"
      )
      .to(".icon-reveal", {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        stagger: 0.6,
        duration: 0.2,
        x: 0,
        delay: 0.6
      });
  }, []);

  return (
    <div
      role="article"
      aria-label="Kontainer for animasjoner av introtekst"
      id="main-hero"
      data-testid="main-hero"
      className="flex flex-col justify-center text-lg"
    >
      <div ref={animateRef} className="p-2 mt-10 mb-4 bg-white opacity-75 lg:mt-4 md:mt-4 xl:mt-4">
        <div className="text-black rounded">
          <section role="intro" aria-label="Introduksjonstekst">
            <h1 className="text-reveal text-5xl text-center p-2">Hei!</h1>
            <h2 className="text-reveal px-6 mt-4 text-lg md:p-0 lg:p-0 xl:p-0 xl:text-center lg:text-left md:text-center xl:text-2xl lg:text-xl md:text-xl md:mx-auto md:w-full lg:w-2/3 xl:w-full">
              Jeg heter Daniel Fjeldstad og er en webutvikler.
            </h2>
            <h2 className="text-reveal px-6 mt-4 text-lg md:p-0 lg:p-0 xl:p-0 xl:text-center lg:text-left md:text-center xl:text-2xl lg:text-xl md:text-xl md:mx-auto md:w-full lg:w-2/3 xl:w-full">
              Jeg kan PHP, mySQL, Wordpress, Javascript, Typescript, React, Vue, Redux, Docker,
              Photoshop og mye mer.
            </h2>
            <span className="flex justify-center p-6">
              <FaReact className="icon-reveal mr-6" title="React ikon" size="3em" />
              <FaVuejs className="icon-reveal mr-6" title="Vue ikon" size="3em" />
              <SiTypescript className="icon-reveal mr-6" title="Typescript ikon" size="3em" />
              <SiWordpress className="icon-reveal mr-6" title="Wordpress ikon" size="3em" />
              <FaPhp className="icon-reveal mr-6" title="PHP ikon" size="3em" />
            </span>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;

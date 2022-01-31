import { gsap } from "gsap";

import useIsomorphicLayoutEffect from "../../hooks/useIsomorphicLayoutEffect";

import { FaReact, FaVuejs, FaPhp } from "react-icons/fa";
import { SiTypescript, SiWordpress } from "react-icons/si";

const Hero = (): JSX.Element => {
  // wait until DOM has been rendered
  useIsomorphicLayoutEffect(() => {
    gsap
      .timeline({ defaults: { opacity: 0, ease: "back", duration: 0.8 } })
      .from("#main-hero", { autoAlpha: 0 })
      .from("#main-hero .introtekst", { y: -150, stagger: 0.3 })
      .from("#main-hero .forsteh2", { x: -100 })
      .from("#main-hero .andreh2", { y: 100, delay: 0.3 })
      .from("#main-hero .ikoner", { y: 60, stagger: 0.3, ease: "bounce" });
  }, []);

  return (
    <div
      role="article"
      aria-label="Kontainer for animasjoner av introtekst"
      id="main-hero"
      data-testid="main-hero"
      className="flex flex-col justify-center text-lg">
      <div className="p-2 mt-10 mb-4 bg-white opacity-75 lg:mt-4 md:mt-4 xl:mt-4">
        <div className="text-black rounded">
          <section role="intro" aria-label="Introduksjonstekst">
            <div className="text-center">
              <span className="introtekst text-5xl inline-block">H</span>
              <span className="introtekst text-5xl inline-block">e</span>
              <span className="introtekst text-5xl inline-block">i</span>
              <span className="introtekst text-5xl inline-block">!</span>
            </div>
            <h2 className="forsteh2 px-6 mt-4 text-lg md:p-0 lg:p-0 xl:p-0 xl:text-center lg:text-left md:text-center xl:text-2xl lg:text-xl md:text-xl md:mx-auto md:w-full lg:w-2/3 xl:w-full">
              Jeg heter Daniel Fjeldstad og er en webutvikler.
            </h2>
            <h2 className="andreh2 px-6 mt-4 text-lg md:p-0 lg:p-0 xl:p-0 xl:text-center lg:text-left md:text-center xl:text-2xl lg:text-xl md:text-xl md:mx-auto md:w-full lg:w-2/3 xl:w-full">
              Jeg kan PHP, mySQL, Wordpress, Javascript, Typescript, React, Vue, Redux, Docker,
              Photoshop og mye mer.
            </h2>
            <span className="flex justify-center p-6">
              <FaReact className="ikoner mr-6" title="React ikon" size="3em" />
              <FaVuejs className="ikoner mr-6" title="Vue ikon" size="3em" />
              <SiTypescript className="ikoner mr-6" title="Typescript ikon" size="3em" />
              <SiWordpress className="ikoner mr-6" title="Wordpress ikon" size="3em" />
              <FaPhp className="ikoner mr-6" title="PHP ikon" size="3em" />
            </span>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;

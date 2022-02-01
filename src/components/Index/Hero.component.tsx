import { gsap } from "gsap";

import useIsomorphicLayoutEffect from "../../hooks/useIsomorphicLayoutEffect";

import { FaReact, FaVuejs, FaPhp } from "react-icons/fa";
import { SiTypescript, SiWordpress } from "react-icons/si";

const Hero = (): JSX.Element => {
  // wait until DOM has been rendered
  useIsomorphicLayoutEffect(() => {
    gsap
      .timeline({ defaults: { opacity: 0, ease: "back", duration: 0.7 } })
      .from("#main-hero", { autoAlpha: 0 })
      .from("#main-hero .introtekst", { y: -70, stagger: 0.3, autoAlpha: 0 })
      .from("#main-hero .forsteh2", { y: -70, autoAlpha: 0 })
      .from("#main-hero .andreh2", { y: 70, autoAlpha: 0 })
      .from("#main-hero .ikoner", { scale: 2.5, stagger: 0.4, ease: "bounce" });
  }, []);

  return (
    <div
      role="article"
      aria-label="Kontainer for animasjoner av introtekst"
      id="main-hero"
      data-testid="main-hero"
      className="flex flex-col justify-center text-lg invisible"
    >
      <div className="p-2 mt-10 mb-4 bg-white opacity-75 lg:mt-4 md:mt-4 xl:mt-4">
        <div className="text-black rounded">
          <section role="intro" aria-label="Introduksjonstekst">
            <div className="text-center">
              <span className="introtekst text-5xl inline-block invisible">H</span>
              <span className="introtekst text-5xl inline-block invisible ">e</span>
              <span className="introtekst text-5xl inline-block invisible">i</span>
              <span className="introtekst text-5xl inline-block invisible">!</span>
            </div>
            <h2 className="forsteh2 invisible px-6 mt-4 text-lg md:p-0 lg:p-0 xl:p-0 xl:text-center lg:text-left md:text-center xl:text-2xl lg:text-xl md:text-xl md:mx-auto lg:w-2/3">
              Jeg heter Daniel Fjeldstad og er en webutvikler.
            </h2>
            <h2 className="andreh2 invisible px-6 mt-4 text-lg md:p-0 lg:p-0 xl:p-0 xl:text-center lg:text-left md:text-center xl:text-2xl lg:text-xl md:text-xl md:mx-auto lg:w-2/3">
              Jeg kan PHP, Wordpress, Javascript, Typescript, React, Vue, Docker, Photoshop og mye
              mer.
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

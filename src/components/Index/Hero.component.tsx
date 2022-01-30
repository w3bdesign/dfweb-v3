import { gsap } from "gsap";

//import { TextPlugin } from "gsap/dist/TextPlugin";

import useIsomorphicLayoutEffect from "../../hooks/useIsomorphicLayoutEffect";

import { FaReact, FaVuejs, FaPhp } from "react-icons/fa";
import { SiTypescript, SiWordpress } from "react-icons/si";

const Hero = (): JSX.Element => {
  // wait until DOM has been rendered
  useIsomorphicLayoutEffect(() => {
    gsap
      .timeline({ defaults: { opacity: 0, ease: "back" } })
      .from("#main-hero", { autoAlpha: 0 })
      .from("#main-hero .introtekst", { y: 150, duration: 0.5, stagger: 1 })
      .from("#main-hero h2", { x: -150, duration: 1, delay: 0.2, stagger: 0.9 })
      .from("#main-hero svg", { y: 50, duration: 1, stagger: 0.3 });
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
            <span className="introtekst text-5xl text-center p-2">H</span>
            <span className="introtekst text-5xl text-center p-2">e</span>
            <span className="introtekst text-5xl text-center p-2">i</span>
            <span className="introtekst text-5xl text-center p-2">!</span>

            <h2 className="px-6 mt-4 text-lg md:p-0 lg:p-0 xl:p-0 xl:text-center lg:text-left md:text-center xl:text-2xl lg:text-xl md:text-xl md:mx-auto md:w-full lg:w-2/3 xl:w-full">
              Jeg heter Daniel Fjeldstad og er en webutvikler.
            </h2>
            <h2 className="px-6 mt-4 text-lg md:p-0 lg:p-0 xl:p-0 xl:text-center lg:text-left md:text-center xl:text-2xl lg:text-xl md:text-xl md:mx-auto md:w-full lg:w-2/3 xl:w-full">
              Jeg kan PHP, mySQL, Wordpress, Javascript, Typescript, React, Vue, Redux, Docker,
              Photoshop og mye mer.
            </h2>
            <span className="flex justify-center p-6">
              <FaReact className="mr-6" title="React ikon" size="3em" />
              <FaVuejs className="mr-6" title="Vue ikon" size="3em" />
              <SiTypescript className="mr-6" title="Typescript ikon" size="3em" />
              <SiWordpress className="mr-6" title="Wordpress ikon" size="3em" />
              <FaPhp className="mr-6" title="PHP ikon" size="3em" />
            </span>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import Icons from "./Icons.component";

import { FadeDown, FadeUp } from "../../animations/functions";

/**
 * Renders Hero that is used on the front page
 * Uses GSAP for animations to show the text
 * @function Hero
 * @returns {JSX.Element} - Rendered component
 */

const Hero = (): JSX.Element => (
  <div
    role="article"
    aria-label="Kontainer for animasjoner av introtekst"
    id="main-hero"
    data-testid="main-hero"
    className="flex flex-col justify-center text-lg ">
    <div className="mt-10 mb-4 bg-white p-2 opacity-75 md:mt-4 lg:mt-4 xl:mt-4">
      <div className="rounded text-black">
        <section role="heading" aria-label="Introduksjonstekst" aria-level={2}>
          <FadeDown delay={1} cssClass="text-center">
            <span className="introtekst inline-block text-5xl">Hei!</span>
          </FadeDown>
          <FadeUp
            delay={1.7}
            cssClass="mt-4 px-6 text-lg md:mx-auto md:p-0 md:text-center md:text-xl lg:w-2/3 lg:p-0 lg:text-left lg:text-xl xl:p-0 xl:text-center xl:text-2xl">
            <h2>Jeg heter Daniel Fjeldstad og er en webutvikler.</h2>
          </FadeUp>
          <FadeDown
            delay={2.2}
            cssClass="mt-4 px-6 text-lg md:mx-auto md:p-0 md:text-center md:text-xl lg:w-2/3 lg:p-0 lg:text-left lg:text-xl xl:p-0 xl:text-center xl:text-2xl">
            <h2>
              Jeg kan PHP, Wordpress, Javascript, Typescript, React, Vue, Docker, Photoshop og mye
              mer.
            </h2>
          </FadeDown>
          <Icons />
        </section>
      </div>
    </div>
  </div>
);

export default Hero;

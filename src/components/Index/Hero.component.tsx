import { gsap } from "gsap";

import useIsomorphicLayoutEffect from "../../hooks/useIsomorphicLayoutEffect";

import { motion } from "framer-motion";

import Icons from "./Icons.component";

import {
  introVariants,
  firstHeaderVariants,
  secondHeaderVariants
} from "../../animations/variants";

/**
 * Renders Hero that is used on the front page
 * Uses GSAP for animations to show the text
 * @function Hero
 * @returns {JSX.Element} - Rendered component
 */

const Hero = (): JSX.Element => {
  // wait until DOM has been rendered
  /* useIsomorphicLayoutEffect(() => {
    gsap
      .timeline({ defaults: { opacity: 0, ease: "back", duration: 0.7 } })
      .from("#main-hero", { autoAlpha: 0 })
      .from("#main-hero .introtekst", { y: -70, stagger: 0.3, autoAlpha: 0 })
      .from("#main-hero .forsteh2", { y: -70, autoAlpha: 0 })
      .from("#main-hero .andreh2", { y: 70, autoAlpha: 0 })
      .from("#main-hero .ikoner", { scale: 2.5, stagger: 0.4, ease: "bounce" });
  }, []);*/

  return (
    <div
      role="article"
      aria-label="Kontainer for animasjoner av introtekst"
      id="main-hero"
      data-testid="main-hero"
      className="flex flex-col justify-center text-lg ">
      <div className="p-2 mt-10 mb-4 bg-white opacity-75 lg:mt-4 md:mt-4 xl:mt-4">
        <div className="text-black rounded">
          <section role="heading" aria-label="Introduksjonstekst" aria-level={2}>
            <motion.div
              className="text-center"
              variants={introVariants}
              initial="initial"
              animate="animate">
              <span className="introtekst text-5xl inline-block">H</span>
              <span className="introtekst text-5xl inline-block">e</span>
              <span className="introtekst text-5xl inline-block">i</span>
              <span className="introtekst text-5xl inline-block">!</span>
            </motion.div>
            <motion.h2
              variants={firstHeaderVariants}
              initial="initial"
              animate="animate"
              className="forsteh2  px-6 mt-4 text-lg md:p-0 lg:p-0 xl:p-0 xl:text-center lg:text-left md:text-center xl:text-2xl lg:text-xl md:text-xl md:mx-auto lg:w-2/3">
              Jeg heter Daniel Fjeldstad og er en webutvikler.
            </motion.h2>
            <motion.h2
              variants={secondHeaderVariants}
              initial="initial"
              animate="animate"
              className="andreh2  px-6 mt-4 text-lg md:p-0 lg:p-0 xl:p-0 xl:text-center lg:text-left md:text-center xl:text-2xl lg:text-xl md:text-xl md:mx-auto lg:w-2/3">
              Jeg kan PHP, Wordpress, Javascript, Typescript, React, Vue, Docker, Photoshop og mye
              mer.
            </motion.h2>
            <Icons />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;

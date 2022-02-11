//import { gsap } from "gsap";

//import useIsomorphicLayoutEffect from "../../hooks/useIsomorphicLayoutEffect";

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
      <div className="mt-10 mb-4 bg-white p-2 opacity-75 md:mt-4 lg:mt-4 xl:mt-4">
        <div className="rounded text-black">
          <section role="heading" aria-label="Introduksjonstekst" aria-level={2}>
            <motion.div
              className="text-center"
              variants={introVariants}
              initial="initial"
              animate="animate">
              <span className="introtekst inline-block text-5xl">H</span>
              <span className="introtekst inline-block text-5xl">e</span>
              <span className="introtekst inline-block text-5xl">i</span>
              <span className="introtekst inline-block text-5xl">!</span>
            </motion.div>
            <motion.h2
              variants={firstHeaderVariants}
              initial="initial"
              animate="animate"
              className="forsteh2  mt-4 px-6 text-lg md:mx-auto md:p-0 md:text-center md:text-xl lg:w-2/3 lg:p-0 lg:text-left lg:text-xl xl:p-0 xl:text-center xl:text-2xl">
              Jeg heter Daniel Fjeldstad og er en webutvikler.
            </motion.h2>
            <motion.h2
              variants={secondHeaderVariants}
              initial="initial"
              animate="animate"
              className="andreh2  mt-4 px-6 text-lg md:mx-auto md:p-0 md:text-center md:text-xl lg:w-2/3 lg:p-0 lg:text-left lg:text-xl xl:p-0 xl:text-center xl:text-2xl">
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

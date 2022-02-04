import { gsap } from "gsap";

import useIsomorphicLayoutEffect from "../../hooks/useIsomorphicLayoutEffect";

import Icons from "./Icons.component";

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
      className="flex flex-col justify-center text-lg invisible">
Test forenkling
    </div>
  );
};

export default Hero;

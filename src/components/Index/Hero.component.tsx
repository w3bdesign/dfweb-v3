import { gsap } from "gsap";
import { useEffect, useRef } from "react";

type TTimeLineRef = HTMLDivElement | null;

const Hero = (): JSX.Element => {
  const boxRef = useRef<TTimeLineRef>(null);

  // wait until DOM has been rendered
  useEffect(() => {
    gsap.from(boxRef.current, {
      scale: 0.2,
      duration: 2,
      opacity: 0,
      ease: "Expo.easeOut",
      delay: 0.2
    });

    gsap.to(".text-reveal", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      stagger: 0.8,
      duration: 0.3,
      delay: 0.2,
      y: 0
    });
  }, []);

  return (
    <div
      role="article"
      aria-label="Kontainer for animasjoner av introtekst"
      id="main-hero"
      data-testid="main-hero"
      className="flex flex-col justify-center text-lg">
      <div ref={boxRef} className="p-4 mt-6 mb-6 bg-white opacity-75">
        <div className="text-black rounded">
          <section role="intro" aria-label="Introduksjonstekst">
            <h1 className="text-reveal text-5xl text-center p-2">Hei!</h1>
            <h2 className="text-reveal text-2xl text-center p-2">
              Jeg heter Daniel Fjeldstad og er en webutvikler.
            </h2>
            <h2 className="text-reveal px-6 mt-4 text-lg md:p-0 lg:p-0 xl:p-0 xl:text-center lg:text-left md:text-center xl:text-2xl lg:text-xl md:text-xl md:mx-auto md:w-full lg:w-2/3 xl:w-full">
              Jeg kan PHP, mySQL, Wordpress, Javascript, Typescript, React, Vue, Redux, Docker,
              Photoshop og mye mer.
            </h2>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;

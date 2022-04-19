import Icons from "./Icons.component";

import FadeDown from "../Animations/FadeDown.component";
import FadeUp from "../Animations/FadeUp.component";

type THero = { text: string };

interface IContent {
  content: THero[];
}

/**
 * Renders Hero that is used on the front page
 * Uses GSAP for animations to show the text
 * @function Hero
 * @returns {JSX.Element} - Rendered component
 */

const Hero = ({ content }: IContent): JSX.Element => (
  <div
    role="article"
    aria-label="Kontainer for animasjoner av introtekst"
    id="main-hero"
    data-testid="main-hero"
    className="flex flex-col justify-center text-lg"
  >
    <div className="mt-10 mb-4 bg-white p-2 opacity-75 md:mt-4 lg:mt-4 xl:mt-4">
      <div className="rounded text-black">
        <section>
          <FadeDown delay={1} cssClass="text-center">
            <span data-cy="hei" className="introtekst inline-block text-5xl">
              {content[0].text}
            </span>
          </FadeDown>
          <FadeUp
            delay={1.7}
            cssClass="mt-4 px-6 text-lg md:mx-auto md:p-0 md:text-center md:text-xl lg:w-2/3 lg:p-0 lg:text-left lg:text-xl xl:p-0 xl:text-center xl:text-2xl"
          >
            <h1>{content[1].text}</h1>
          </FadeUp>
          <FadeDown
            delay={2.2}
            cssClass="mt-4 px-6 text-lg md:mx-auto md:p-0 md:text-center md:text-xl lg:w-2/3 lg:p-0 lg:text-left lg:text-xl xl:p-0 xl:text-center xl:text-2xl"
          >
            <h2>{content[2].text}</h2>
          </FadeDown>
          <Icons />
        </section>
      </div>
    </div>
  </div>
);

export default Hero;

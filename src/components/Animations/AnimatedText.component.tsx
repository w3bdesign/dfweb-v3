import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

type AnimatedTextProps = {
  text: string | string[];
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
  delay?: number;
  repeatDelay?: number;
  animation?: {
    hidden: Variant;
    visible: Variant;
  };
};

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1
    }
  }
};

/**
 * Renders an animated text component.
 *
 * @param {string | string[]} text - The text or array of texts to be animated.
 * @param {React.ElementType} [el="p"] - The HTML element type to wrap the animated text.
 * @param {string} [className] - The CSS class name for the animated text component.
 * @param {boolean} [once] - If true, the animation will only happen once when the component is in view.
 * @param {number} [delay=0] - The delay in milliseconds before the animation starts.
 * @param {number} [repeatDelay] - The delay in milliseconds before the animation restarts when using repeat.
 * @param {Object} [animation=defaultAnimations] - The animation object containing variants for the motion span.
 * @return {React.ReactElement} The rendered animated text component.
 */
export const AnimatedText = ({
  text,
  el: Wrapper = "p",
  className,
  once,
  delay = 0,
  repeatDelay,
  animation = defaultAnimations
}: AnimatedTextProps) => {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const show = () => {
      controls.start("visible");
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start("hidden");
          controls.start("visible");
        }, repeatDelay);
      }
    };

    if (isInView) {
      setTimeout(show, delay);
    } else {
      controls.start("hidden");
    }

    return () => clearTimeout(timeout);
  }, [isInView, controls, delay, repeatDelay]);

  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {}
        }}
        aria-hidden>
        {textArray.map((line, lineIndex) => (
          <span className="block" key={uuidv4()}>
            {line.split(" ").map((word, wordIndex) => (
              <span className="mt-2 inline-block" key={uuidv4()}>
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${char}-${charIndex}`}
                    className="inline-block"
                    variants={animation}>
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

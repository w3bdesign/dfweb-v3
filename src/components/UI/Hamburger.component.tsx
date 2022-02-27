import { MouseEventHandler } from "react";

export interface IHamburgerProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  animatetoX: boolean;
}

/**
 * Hamburger component used in mobile menu. Animates to a X when clicked
 * @function Hamburger
 * @param {MouseEventHandler<HTMLButtonElement>} onClick - onClick handler to respond to clicks
 * @param {boolean} animatetoX - Should the hamburger animate to a X?
 * @returns {JSX.Element} - Rendered component
 */

const Hamburger = ({ onClick, animatetoX }: IHamburgerProps) => {
  const hamburgerLine =
    "h-1 w-10 my-1 rounded-full bg-white transition ease transform duration-300 not-sr-only";

  const opacityFull = "opacity-100 group-hover:opacity-100";

  return (
    <button
      className="flex flex-col w-16 rounded justify-center items-center group "
      data-cy="hamburger"
      data-testid="hamburger"
      onClick={onClick}
      aria-expanded={animatetoX}
      type="button">
      <span className="sr-only text-white text-2xl">Hamburger</span>
      <span
        data-testid="hamburgerline"
        className={`${hamburgerLine} ${
          animatetoX ? "rotate-45 translate-y-3 opacity-100 group-hover:opacity-100" : opacityFull
        }`}
      />
      <span className={`${hamburgerLine} ${animatetoX ? "opacity-0" : opacityFull}`} />
      <span
        className={`${hamburgerLine} ${
          animatetoX ? "-rotate-45 -translate-y-3 opacity-100 group-hover:opacity-100" : opacityFull
        }`}
      />
    </button>
  );
};

export default Hamburger;

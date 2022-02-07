import type { ReactNode, MouseEventHandler } from "react";

type TProps = {
  text?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

/**
 * Common button component used by several pages
 *
 *
 * @param {Object} text Text passed into the button
 * @param {Void} onClick Handler for when we click the button
 */

const Button = ({ text, children, onClick }: TProps) => (
  <button
    type="submit"
    onClick={onClick}
    className="p-4 m-4 text-white transition duration-500 ease-in-out bg-gray-800 rounded hover:shadow-outline hover:bg-gray-600">
    {text}
    {children}
  </button>
);

export default Button;

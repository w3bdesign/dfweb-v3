import type { ReactNode, MouseEventHandler } from "react";

type TProps = {
  text?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

/**
 * Button component usually used for links
 * @function Button
 * @param {string?} text - Text to show in the button
 * @param {children?} children - HTML children to render in the button
 * @returns {JSX.Element} - Rendered component
 */

const Button = ({ text, children, onClick }: TProps): JSX.Element => (
  <button
    type="submit"
    onClick={onClick}
    className="p-4 m-4 text-white transition duration-500 ease-in-out bg-gray-800 rounded hover:shadow-outline hover:bg-gray-600"
  >
    {text}
    {children}
  </button>
);

export default Button;

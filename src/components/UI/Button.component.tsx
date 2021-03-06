import type { ReactNode, MouseEventHandler } from "react";

export interface IButtonProps {
  text?: string;
  children?: ReactNode | JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

/**
 * Button component usually used for links
 * @function Button
 * @param {string?} text - Text to show in the button
 * @param {children?} children - HTML children to render in the button
 * @param {MouseEventHandler<HTMLButtonElement>?} onClick - onClick handler for button
 * @returns {JSX.Element} - Rendered component
 */

const Button = ({ text, children, onClick }: IButtonProps): JSX.Element => (
  <button
    type="submit"
    onClick={onClick}
    data-cy="submit"
    className="p-4 m-4 text-white transition duration-500 ease-in-out bg-gray-800 rounded hover:shadow-outline hover:bg-gray-600"
  >
    {text}
    {children}
  </button>
);

export default Button;

import type { ReactNode } from "react";

export interface IButtonProps {
  children?: ReactNode | JSX.Element;
  href?: string;
  renderAs?: "button" | "a";
}

/**
 * Button component usually used for links
 * @function Button
 *
 * @param {children?} children - HTML children to render in the button
 * @param {MouseEventHandler<HTMLButtonElement>?} onClick - onClick handler for button
 * @returns {JSX.Element} - Rendered component
 */

const Button = ({ children, href, renderAs, ...props }: IButtonProps) => {
  const Component = renderAs || "button";
  const targetLink = renderAs ? "_blank" : undefined;

  return (
    <Component
      type="submit"
      data-cy="submit"
      className="p-4 m-4 text-white transition duration-500 ease-in-out bg-gray-800 rounded hover:shadow-outline hover:bg-gray-600"
      href={href}
      target={targetLink}
      {...props}>
      {children}
    </Component>
  );
};

export default Button;

import type { ReactNode } from "react";

type TRenderAs = "button" | "a";

export interface IButtonProps {
  children?: ReactNode | JSX.Element;
  href?: string;
  renderAs?: TRenderAs;
}

/**
 * A reusable button component.
 *
 * @param {ReactNode | JSX.Element} children - The content of the button.
 * @param {string} href - The link to navigate to when the button is clicked.
 * @param {TRenderAs} renderAs - The HTML tag to render the button as.
 * @returns {JSX.Element} - A button component.
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

import type { ReactNode } from "react";

export interface IButtonProps {
  children?: ReactNode | JSX.Element;
  href?: string;
  renderAs?: "button" | "a";
}

/**
 * A reusable button component.
 * @param {Object} props - The component props.
 * @param {string} [props.children] - The content of the button.
 * @param {string} [props.href] - The link to navigate to when the button is clicked.
 * @param {string} [props.renderAs] - The HTML tag to render the button as.
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

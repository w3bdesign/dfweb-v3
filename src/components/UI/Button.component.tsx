import type { ElementType, ReactNode } from "react";

export interface IButtonProps {
  children: ReactNode;
  href?: string;
  renderAs?: ElementType;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

/**
 * Renders a button component with optional props.
 *
 * @param {IButtonProps} props - The props object containing the following properties:
 *   - children: The content of the button.
 *   - href: The URL the button should link to.
 *   - renderAs: The HTML element to render the button as. Defaults to "button".
 *   - type: The type of button. Defaults to "submit".
 *   - disabled: Whether the button should be disabled. Defaults to false.
 *   - ...props: Additional props to pass to the button component.
 * @return {JSX.Element} The rendered button component.
 */
const Button = ({
  children,
  href,
  renderAs,
  type = "submit",
  disabled = false,
  ...props
}: IButtonProps) => {
  const Component = renderAs ?? "button";
  const targetLink = renderAs ? "_blank" : undefined;

  return (
    <Component
      type={type}
      data-cy="submit"
      className="p-4 m-4 text-white transition duration-500 ease-in-out bg-gray-800 rounded hover:shadow-outline hover:bg-gray-600 disabled:opacity-50 disabled:pointer-events-none"
      href={href}
      target={targetLink}
      disabled={disabled}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;

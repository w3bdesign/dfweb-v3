import type { ReactNode } from "react";

export interface IPageHeaderProps {
  children: ReactNode | JSX.Element;
}

/**
 * PageHeader component for rendering the header for each page
 * @function PageHeader
 * @param {children?} children - HTML children to render in the page header component
 * @returns {JSX.Element} - Rendered component
 */

const PageHeader = ({ children }: IPageHeaderProps) => (
  <div className="px-4 p lg:px-0 xl:px-0 md:px-0">
    <div className="container bg-white shadow rounded h-16 p-4 m-4 mx-auto">
      <h1 className="text-2xl text-center text-black font-bold">{children}</h1>
    </div>
  </div>
);

export default PageHeader;

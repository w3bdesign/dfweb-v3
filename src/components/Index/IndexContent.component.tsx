import Link from "next/link";
import PortableText from "react-portable-text";
import { Fragment, Key, ReactNode } from "react";

import Hero from "./Hero.component";
import BounceInScroll from "../Animations/BounceInScroll.component";

interface IHero {
  text: string;
}

interface IContent {
  _key: string | null;
  text: IText[];
  title: string;
}

interface IChild {
  _key: string;
  _type: string;
  marks: string[];
  text: string;
}

interface IText {
  _key: string;
  _type: string;
  children: IChild[];
  markDefs: string[];
  style: string;
}

interface ISerializerCode {
  children: React.ReactNode;
}

interface ISerializerLink {
  href: string;
  children: ReactNode;
}

interface IPageContent {
  id?: Key;
  content: IContent[];
  hero: IHero[];
}

type TPageContent = { pageContent: IPageContent[] };

/**
 * Renders a Code component.
 *
 * @param {ISerializerCode} children - The children to be rendered.
 * @return {JSX.Element} The rendered Code component.
 */
const Code = ({ children }: ISerializerCode) => (
  <span className="mt-4 text-lg">
    {children} <br />
    &nbsp;
  </span>
);

/**
 * Renders a link component with a given href and children.
 *
 * @param {ISerializerLink} props - The properties for the link component.
 * @param {React.ReactNode} props.children - The children to be rendered within the link.
 * @param {string} props.href - The href attribute for the link.
 * @return {React.ReactElement} The rendered link component.
 */

const LinkComponent = ({ children, href }: ISerializerLink) => (
  <Link className="underline text-lg font-bold text-blue-700" href={href}>
    {children}
  </Link>
);

/**
 * Renders a section component with a title and text content.
 *
 * @param {IContent} props - The props object containing the text and title.
 * @param {string} props.text - The text content to be rendered.
 * @param {string} props.title - The title of the section.
 * @return {JSX.Element} The rendered section component.
 */
const Section = ({ text, title }: IContent) => (
  <section aria-label={title} data-testid="sanity-section">
    <div className="mt-4 p-8 text-lg text-black bg-white rounded shadow min-h-full lg:h-128 xl:h-96">
      <BounceInScroll viewAmount={0}>
        <h2 data-testid="sanity-title" data-cy={title} className="text-3xl text-center">
          {title}
        </h2>
        <br />
        <PortableText
          content={text}
          serializers={{
            code: Code,
            link: LinkComponent
          }}
        />
      </BounceInScroll>
    </div>
  </section>
);

/**
 * Renders the main content of the page using the given page content object.
 *
 * @param {TPageContent} pageContent - The object containing the page content to render.
 * @return {JSX.Element} The main content of the page.
 */
const IndexContent = ({ pageContent }: TPageContent) => (
  <main aria-label="Her kommer hovedinnholdet" id="maincontent">
    <div className="mx-auto mt-16 rounded lg:mt-20 xl:mt-20 bg-graybg shadow-large md:mt-16 sm:mt-12 xs:mt-10">
      {pageContent && <Hero content={pageContent[0].hero} />}
      <div className="container grid gap-4 p-4 mx-auto mt-2 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 xs:grid-cols-1">
        {pageContent?.map(({ id, content }: IPageContent) => (
          <Fragment key={id}>
            {content?.map((contentProps: IContent) => (
              <Section key={contentProps._key} {...contentProps} />
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  </main>
);

export default IndexContent;

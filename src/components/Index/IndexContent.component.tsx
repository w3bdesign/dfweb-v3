//imports
import Link from "next/link";
import PortableText from "react-portable-text";

// types
import { Key, ReactChild, ReactFragment, ReactPortal } from "react";
import { UrlObject } from "url";

// components
import Hero from "./Hero.component";

// animations
import BounceInScroll from "../Animations/BounceInScroll.component";

// interfaces
interface IContent {
  _id: Key | null;
  title: string;
  text: IText[];
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
  children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
}

interface ISerializerLink {
  href: string | UrlObject;
  children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
}

type TData = { post: IContent[] };

/**
 * Renders the index content for the front page
 * @function IndexContent
 * @param {TData} post - Text data that is retrieved from Sanity
 * @returns {JSX.Element} - Rendered component
 */

const IndexContent = ({ post }: TData): JSX.Element => (
  <main role="main" aria-label="Her kommer hovedinnholdet" id="maincontent">
    <div className="mx-auto mt-16 rounded lg:mt-20 xl:mt-20 bg-graybg shadow-large md:mt-16 sm:mt-64 xs:mt-64">
      <Hero />
      <div className="container grid gap-4 p-4 mx-auto mt-2 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 xs:grid-cols-1">
        {post?.map(({ _id, title, text }: IContent) => (
          <section key={_id} aria-label={title} data-testid="sanity-section">
            <div className="mt-4 p-8 text-lg text-black bg-white rounded shadow min-h-full lg:h-128 xl:h-96">
              <BounceInScroll viewAmount={0.0}>
                <h2 data-cy={title} className="text-3xl text-center">
                  {title}
                </h2>
                <br />
                <PortableText
                  content={text}
                  serializers={{
                    code: ({ children }: ISerializerCode) => (
                      <span className="mt-4 text-lg">
                        {children}
                        <br />
                        &nbsp;
                      </span>
                    ),
                    link: ({ children, href }: ISerializerLink) => (
                      <Link href={href} passHref>
                        <a className="underline">{children}</a>
                      </Link>
                    )
                  }}
                />
              </BounceInScroll>
            </div>
          </section>
        ))}
      </div>
    </div>
  </main>
);

export default IndexContent;

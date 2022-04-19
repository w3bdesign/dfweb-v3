//imports
import Link from "next/link";
import PortableText from "react-portable-text";

// types
import { Fragment, Key, ReactChild, ReactFragment, ReactPortal, useEffect, useState } from "react";
import { UrlObject } from "url";

// components
import Hero from "../Index/Hero.component";

// animations
import BounceInScroll from "../Animations/BounceInScroll.component";

// interfaces

interface IHero {
  text: string;
}

interface IPageContent {
  id: Key | null;
  content: IContent[];
  hero: IHero[] | null | undefined;
}

interface IContent {
  _key: Key | null;
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
  children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
}

interface ISerializerLink {
  href: string | UrlObject;
  children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
}

type TPageContent = { pagecontent: IPageContent[] };

/**
 * Renders the index content for the front page
 * @function IndexContent
 * @param {TData} post - Text data that is retrieved from Sanity
 * @returns {JSX.Element} - Rendered component
 */

const IndexContent = ({ pagecontent }: TPageContent): JSX.Element => {
  const [hero, setHero] = useState<IHero[] | null | undefined>();

  useEffect(() => {
    if (pagecontent) {
      setHero(pagecontent[0].hero);
    }
  }, [pagecontent]);



  return (
    <main role="main" aria-label="Her kommer hovedinnholdet" id="maincontent">
      <div className="mx-auto mt-16 rounded lg:mt-20 xl:mt-20 bg-graybg shadow-large md:mt-16 sm:mt-64 xs:mt-64">
        {pagecontent && <Hero content={hero} />}
        <div className="container grid gap-4 p-4 mx-auto mt-2 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 xs:grid-cols-1">
          {pagecontent?.map(({ id, content }: IPageContent) => (
            <Fragment key={id}>
              {content?.map(({ _key, text, title }: IContent) => (
                <section key={_key} aria-label={title} data-testid="sanity-section">
                  <div className="mt-4 p-8 text-lg text-black bg-white rounded shadow min-h-full lg:h-128 xl:h-96">
                    <BounceInScroll viewAmount={0}>
                      <h2
                        data-testid="sanity-title"
                        data-cy={title}
                        className="text-3xl text-center">
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
            </Fragment>
          ))}
        </div>
      </div>
    </main>
  );
};

export default IndexContent;

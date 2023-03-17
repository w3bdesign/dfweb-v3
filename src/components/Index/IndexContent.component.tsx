import Link from "next/link";
import PortableText from "react-portable-text";
import { Fragment } from "react";

import Hero from "../Index/Hero.component";
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
  children: React.ReactNode;
}

interface IPageContent {
  id: React.Key | null;
  content: IContent[];
  hero: IHero[];
}

type TPageContent = { pageContent: IPageContent[] };

const IndexContent = ({ pageContent }: TPageContent) => (
  <main aria-label="Her kommer hovedinnholdet" id="maincontent">
    <div className="mx-auto mt-16 rounded lg:mt-20 xl:mt-20 bg-graybg shadow-large md:mt-16 sm:mt-12 xs:mt-10">
      {pageContent && <Hero content={pageContent[0].hero} />}
      <div className="container grid gap-4 p-4 mx-auto mt-2 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 xs:grid-cols-1">
        {pageContent?.map(({ id, content }: IPageContent) => (
          <Fragment key={id}>
            {content?.map(({ _key, text, title }: IContent) => (
              <section key={_key} aria-label={title} data-testid="sanity-section">
                <div className="mt-4 p-8 text-lg text-black bg-white rounded shadow min-h-full lg:h-128 xl:h-96">
                  <BounceInScroll viewAmount={0}>
                    <h2 data-testid="sanity-title" data-cy={title} className="text-3xl text-center">
                      {title}
                    </h2>
                    <br />
                    <PortableText
                      content={text}
                      serializers={{
                        code: ({ children }: ISerializerCode) => (
                          <span className="mt-4 text-lg">
                            {children} <br />
                            &nbsp;
                          </span>
                        ),
                        link: ({ children, href }: ISerializerLink) => (
                          <Link className="underline text-lg font-bold text-blue-700" href={href}>
                            {children}
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

export default IndexContent;

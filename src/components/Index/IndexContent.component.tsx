//imports
import Link from "next/link";
import PortableText from "react-portable-text";

// types
import { Key, ReactChild, ReactFragment, ReactPortal } from "react";
import { UrlObject } from "url";

// components
import Hero from "./Hero.component";

// interfaces
interface IContent {
  _id: Key | null;
  title: string;
  text: [object];
}

interface ISerializerCode {
  children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
}

interface ISerializerLink {
  href: string | UrlObject;
  children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
}

type TData = { post?: IContent[] };

const IndexContent = ({ post }: TData) => {
  console.log("Post: ", post)
  return (
    <main role="main" aria-label="Her kommer hovedinnholdet" id="maincontent">
      <div className="mx-auto mt-16 rounded lg:mt-20 xl:mt-20 bg-graybg shadow-large md:mt-16 sm:mt-64 xs:mt-64">
        <Hero />
        <div className="container grid gap-4 p-4 mx-auto mt-2 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 xs:grid-cols-1">
          {post &&
            post.map((content: IContent) => (
              <section
                key={content._id}
                role="contentinfo"
                aria-label={content.title}
                data-testid="sanity-section">
                <div className="mt-4 p-8 text-lg text-black bg-white rounded shadow">
                  <h2 className="text-3xl text-center">{content.title}</h2>
                  <PortableText
                    className="text-xl"
                    content={content.text}
                    serializers={{
                      code: (props: ISerializerCode) => (
                        <p className="mt-6 text-lg">{props.children} </p>
                      ),
                      link: (props: ISerializerLink) => (
                        <Link href={props.href}>
                          <a className="underline">{props.children}</a>
                        </Link>
                      )
                    }}
                  />
                </div>
              </section>
            ))}
        </div>
      </div>
    </main>
  );
};

export default IndexContent;

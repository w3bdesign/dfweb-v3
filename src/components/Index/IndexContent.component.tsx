import Link from "next/link";
import PortableText from "react-portable-text";

import type { NextComponentType } from "next";
import React from "react";

const IndexContent: NextComponentType = ({ post }: any) => {
  console.log("Post: ", post);
  return (
    <main role="main" aria-label="Her kommer hovedinnholdet" id="maincontent">
      <div className="mx-auto mt-16 rounded lg:mt-20 xl:mt-20 bg-graybg shadow-large md:mt-16 sm:mt-64 xs:mt-64">
        <div
          role="article"
          aria-label="Kontainer for animasjoner av introtekst"
          id="main-hero"
          className="flex flex-col justify-center text-lg">
          <div className="p-2 mt-4 mb-4 bg-white opacity-75">
            <div className="text-black rounded">
              <section aria-label="Introduksjonstekst">
                Her kommer en Jumbotron eller noe lignende
              </section>
            </div>
          </div>
        </div>
        <div className="container grid gap-4 p-4 mx-auto mt-2 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 xs:grid-cols-1">
          {post.map((post: any) => (
            <div className="mt-4 p-8 text-lg text-black bg-white rounded shadow" key={post._id}>
              <section role="contentinfo" aria-label={post.title}>
                <h2 className="text-3xl text-center">{post.title}</h2>
                <PortableText
                  className="text-xl"
                  content={post.text}
                  serializers={{
                    code: (props: any) => <p className="mt-6 text-lg">{props.children} </p>,
                    link: (props: any) => (
                      <Link href={props.href}>
                        <a className="underline">{props.children}</a>
                      </Link>
                    )
                  }}
                />
              </section>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default IndexContent;

import Link from "next/link";

import type { NextComponentType } from "next";

const IndexContent: NextComponentType = () => {
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
              <section aria-label="Introduksjonstekst">Introduksjonstekst</section>
            </div>
          </div>
        </div>
        <div className="container grid gap-4 p-4 mx-auto mt-2 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 xs:grid-cols-1">
          <div className="p-8 text-lg text-black bg-white rounded shadow">
            <section aria-label="Hovedinnhold om meg">
              <h1 className="text-3xl text-center">Om Meg</h1>
              <p
                role="article"
                aria-label="Informasjon om mine ferdigheter"
                className="mt-6 text-lg">
                Siden 2000 har jeg arbeidet med webutvikling. Jeg har arbeidet med WordPress og
                WooCommerce siden 2011 hvor jeg har arbeidet frilans via Fiverr og kan skilte med
                100% positiv tilbakemelding på samtlige oppdrag.
              </p>
              <p role="article" aria-label="Info om open-source bidrag" className="mt-6 text-lg">
                Har også bidratt til flere open-source prosjekter på Github.
              </p>
              <p
                role="article"
                aria-label="Info om andre teknologier jeg har jobbet med"
                className="mt-6 text-lg">
                Jeg har også erfaring med andre teknologier som moderne Javascript (ES6+), Node.js,
                Firebase, Context, Redux, Axios, Docker, Storybook, NextJS, Gatsby, MongoDB,
                OpenCart, Magento med mer.
              </p>
            </section>
          </div>
          <div className="p-8 text-lg text-black bg-white rounded shadow">
            <section aria-label="Github seksjon">
              <h1 className="text-3xl text-center">Prosjekter</h1>
              <p
                role="article"
                aria-label="Informasjon om Github og prosjekter"
                className="mt-6 text-lg">
                Jeg arbeider jevnlig med hobbyprosjekter.
                <br />
                <br />
                Kildekoden publiserer jeg på
                <Link href="https://github.com/w3bdesign">
                  <a className="underline" target="_blank" rel="noopener noreferrer">
                    {" "}
                    GITHUB
                  </a>
                </Link>
              </p>
              <p className="mt-6 text-lg">
                På{" "}
                <Link href="/prosjekter">
                  <a className="underline">PROSJEKTER</a>
                </Link>{" "}
                kan du se eksempler på arbeid jeg har gjort i nyere tid.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexContent;

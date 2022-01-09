import Image from "next/image";

import type { NextPage } from "next";
import Button from "../UI/Button.component";

const shimmer = (width: number, height: number) => `
<svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="#333" />
  <rect id="r" width="${width}" height="${height}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${width}" to="${width}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str);

const CVContent: NextPage = () => {
  const CVUrl = "../../assets/pdf/CV-dfweb.pdf";

  return (
    <main id="maincontent">
      <div className="mt-32 bg-graybg">
        <div className="px-4 p lg:px-0 xl:px-0 md:px-0">
          <div className="container mx-auto bg-white rounded shadow">
            <div className="p-4 mx-auto mt-4">
              <div className="p-4 text-lg rounded">
                <h1 className="m-2 text-3xl text-center text-black">CV</h1>
                <div className="mt-0 sm:mt-2 xs:mt-2">
                  <Image
                    src="/../../images/cv-side1.jpg"
                    alt="CV side 1"
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                    className="hidden mt-4 text-center xl:block lg:block"
                    width="200"
                    height="200"
                  />
                  <Image
                    src="/../../images/cv-side2.jpg"
                    alt="CV side 2"
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                    className="hidden mt-4 text-center xl:block lg:block"
                    width="200"
                    height="200"
                  />
                </div>
                <div className="mx-auto mt-0 text-center sm:mt-2 xs:mt-2">
                  <Button>
                    <a rel="noopener noreferrer" target="_blank" href={CVUrl}>
                      Last ned PDF
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CVContent;

import { Document, Page, pdfjs } from "react-pdf";
//import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5.js';

import Link from "next/link";

import PageHeader from "../UI/PageHeader.component";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

/**
 * Renders CV content
 * Uses React-pdf
 * @function CVContent
 * @returns {JSX.Element} - Rendered component
 */

const CVContent = (): JSX.Element => (
  <main id="maincontent">
    <div className="mt-32 bg-graybg">
      <PageHeader>CV</PageHeader>
      <div className="px-4 p lg:px-0 xl:px-0 md:px-0">
        <div className="container mx-auto bg-white rounded shadow mb-36 sm:mb-4">
          <div className="p-4 mx-auto mt-4 h-96 sm:h-auto flex justify-center items-center sm:block">
            <div className="p-4 text-lg rounded ">
              <div className="mt-0 sm:mt-2 xs:mt-2">
                <Document
                  className="hidden mt-4 text-center xl:block lg:block"
                  error="En feil har oppstått under lasting av PDF"
                  loading="Laster inn PDF ..."
                  file="./CV-dfweb.pdf">
                  <Page
                    renderMode="svg"
                    className="flex content-center justify-center -mt-12"
                    scale={1.5}
                    pageNumber={1}
                  />
                  <Page
                    renderMode="svg"
                    className="flex content-center justify-center -mt-24"
                    scale={1.5}
                    pageNumber={2}
                  />
                </Document>
              </div>
              <div className=" mx-auto pt-2 text-center sm:mt-2 xs:mt-2 bg-gray-800 rounded w-64 h-12 text-white cursor-pointer">
                <Link href="./CV-dfweb.pdf">Last ned PDF</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default CVContent;

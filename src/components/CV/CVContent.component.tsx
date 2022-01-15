import { Document, Page, pdfjs } from "react-pdf";

import Link from "next/link";

import type { NextPage } from "next";

import Button from "../UI/Button.component";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const CVContent: NextPage = () => {
  return (
    <main id="maincontent">
      <div className="mt-24 bg-graybg">
        <div className="px-4 p lg:px-0 xl:px-0 md:px-0">
          <div className="container mx-auto bg-white rounded shadow">
            <div className="p-4 mx-auto mt-4">
              <div className="p-4 text-lg rounded">
                <div className="mt-0 sm:mt-2 xs:mt-2">
                  <Document
                    className="hidden mt-4 text-center xl:block lg:block"
                    error="En feil har oppstått under lasting av PDF"
                    loading="Laster inn PDF ..."
                    file="./CV-dfweb.pdf"
                  >
                    <Page
                      renderMode="svg"
                      className="flex content-center justify-center -mt-32"
                      scale={1.5}
                      pageNumber={1}
                    />
                    <Page
                      renderMode="svg"
                      className="flex content-center justify-center -mt-48"
                      scale={1.5}
                      pageNumber={2}
                    />
                  </Document>
                </div>
                <div className="mx-auto mt-0 text-center sm:mt-2 xs:mt-2">
                  <Button>
                    <Link href="./CV-dfweb.pdf">Last ned PDF</Link>
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

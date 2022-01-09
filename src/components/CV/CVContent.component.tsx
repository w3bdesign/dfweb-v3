import { Document, Page, pdfjs } from "react-pdf";

import type { NextPage } from "next";
import Button from "../UI/Button.component";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const CVContent: NextPage = () => {
  //const CVUrl = "../../assets/pdf/CV-dfweb.pdf";

  return (
    <main id="maincontent">
      <div className="mt-32 bg-graybg">
        <div className="px-4 p lg:px-0 xl:px-0 md:px-0">
          <div className="container mx-auto bg-white rounded shadow">
            <div className="p-4 mx-auto mt-4">
              <div className="p-4 text-lg rounded">
                <h1 className="m-2 text-3xl text-center text-black">CV</h1>
                <div className="mt-0 sm:mt-2 xs:mt-2">
                  <Document file="./CV-dfweb.pdf">
                    <Page pageNumber={1} />
                    <Page pageNumber={2} />
                  </Document>
                </div>
                <div className="mx-auto mt-0 text-center sm:mt-2 xs:mt-2">
                  <Button>
                    <a rel="noopener noreferrer" target="_blank" href="./CV-dfweb.pdf">
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

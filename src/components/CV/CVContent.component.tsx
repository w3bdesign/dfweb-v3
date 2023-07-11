import dynamic from "next/dynamic";

import Link from "next/link";

import PageHeader from "@/components/UI/PageHeader.component";

const PdfViewer = dynamic(() => import("./PDFViewer.component"), {
  ssr: false
});

/**
 * Renders CV content
 * Uses React-pdf
 * @function CVContent
 * @returns {JSX.Element} - Rendered component
 */

const CVContent = () => (
  <main id="maincontent">
    <div className="mt-32 bg-graybg">
      <PageHeader>CV</PageHeader>
      <div className="px-4 p lg:px-0 xl:px-0 md:px-0">
        <div className="container mx-auto bg-white rounded shadow sm:mb-4">
          <div className="p-4 mx-auto h-96 md:h-full mt-4 flex justify-center items-center sm:block">
            <div className="p-4 text-lg rounded ">
              <div className="mt-4 hidden md:block">
                <PdfViewer file="./cv/CV-dfweb.pdf" />
              </div>
              <div className="mx-auto pt-2 text-center sm:mt-2 xs:mt-2 bg-gray-800 rounded w-64 h-12 text-white cursor-pointer">
                <Link href="./cv/CV-dfweb.pdf">Last ned PDF</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default CVContent;

import type { FC } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

type PdfViewerProps = { file: string };

/**
 * Renders a PDF viewer component with the given file.
 *
 * @param {PdfViewerProps} props - The props object with the file to be rendered.
 * @return {JSX.Element} The PDF viewer component with the specified file.
 */
const PdfViewer: FC<PdfViewerProps> = (props) => {
  const { file } = props;

  return (
    <Document file={file}>
      <Page
        //renderMode="svg"
        className="flex content-center justify-center -mt-12"
        scale={1.5}
        pageNumber={1}
      />
      <Page
        //renderMode="svg"
        className="flex content-center justify-center -mt-8"
        scale={1.5}
        pageNumber={2}
      />
    </Document>
  );
};

export default PdfViewer;

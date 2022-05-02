import Image from "next/image";

import PageHeader from "../UI/PageHeader.component";

import notfound from "../../../public/notfound.svg";

interface IError {
  text: string;
}

/**
 * Renders error page (404 not found error)
 * @function ErrorContent
 * @returns {JSX.Element} - Rendered component
 */

const ErrorContent = ({ text }: IError): JSX.Element => (
  <main id="maincontent">
    <div className="mt-32 bg-graybg">
      <PageHeader>{text}</PageHeader>
      <div className="px-4 p lg:px-0 xl:px-0 md:px-0">
        <div
          id="error-container"
          className="container mx-auto bg-white rounded shadow mb-36 sm:mb-4"
        >
          <div className="p-4 mt-4 h-96 sm:h-auto flex justify-center items-center sm:block">
            <div className="p-4 text-lg rounded">
              <div className="mt-0 sm:mt-2 xs:mt-2">
                <div className="mt-64 sm:mt-12 w-72 mx-auto">
                  <Image alt="Not found image" src={notfound} width="400" height="300" priority />
                </div>
                <h2 className="mt-12 h-64 text-center sm:text-2xl text-lg">
                  Her var det noe rusk i maskineriet.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="error-filler" className="mt-40 lg:mt-0" />
    </div>
  </main>
);

export default ErrorContent;

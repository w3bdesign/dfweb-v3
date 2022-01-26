import Image from "next/image";

import { urlFor } from "../../lib/sanity";

import Button from "../UI/Button.component";

import type { IProject } from "./ProsjekterListings.component";

/**
 * Display individual portfolio projects if they match the filter passed down through props
 *
 * @param {Object} projects The portfolio project data to display, contains name, image etc
 */

const ProsjektIndividualProjects = ({ projects }: IProject): JSX.Element => {
  return (
    <>
      {projects.map(
        ({ id, name, description, subdescription, urlwww, urlgithub, projectimage }: any) => (
          <div
            id="projectdiv"
            key={id}
            className="p-6 text-lg text-black transition duration-500 ease-in-out bg-white rounded shadow  hover:bg-sky-50 transform-gpu"
          >
            <h2 className="text-xl font-black text-center">{name}</h2>
            <div className="mt-6 text-lg text-left lg:text-left md:text-left">
              <p>{description}</p>
              <p className="mt-6 text-left md:text-left lg:text-left">
                Teknologier: {subdescription}
              </p>
              <div className="flex justify-center mt-6">
                {projectimage && (
                  <Image
                    height="255"
                    width="500"
                    src={urlFor(projectimage).url() as string}
                    alt={name}
                    role="presentation"
                  />
                )}
              </div>
              <div className="flex justify-center mt-4">
                {/* Display only Github button if not empty  */}
                {urlgithub && (
                  <a rel="noopener noreferrer" target="_blank" aria-label={name} href={urlgithub}>
                    <Button text="Github" />
                  </a>
                )}
                {urlwww && (
                  <a rel="noopener noreferrer" target="_blank" aria-label={name} href={urlwww}>
                    <Button text="Besøk" />
                  </a>
                )}
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default ProsjektIndividualProjects;

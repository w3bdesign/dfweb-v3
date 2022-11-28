import Image from "next/image";

import BounceInScroll from "../Animations/BounceInScroll.component";
import LinkButton from "./LinkButton.component";

import { urlFor } from "../../lib/sanity";

import type { IProject } from "./ProsjekterListings.component";

/**
 * Display individual portfolio projects if they match the filter passed down through props
 * @function ProsjekterSingleProject
 * @param {IProjectInterface[]} projects - Projects that is retrieved from Sanity in prosjekter.tsx
 * @returns {JSX.Element} - Rendered component
 */

const ProsjekterSingleProject = ({ projects }: IProject): JSX.Element => (
  <div
    data-cy="prosjektgrid"
    data-testid="prosjektgrid"
    className="grid gap-4 pt-4 pb-4 lg:px-0 xl:px-0 md:px-0 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 xs:grid-cols-1">
    {projects.map(({ id, name, description, subdescription, urlwww, urlgithub, projectimage }) => (
      <div
        key={id}
        data-cy="projectdiv"
        data-testid="projectdiv"
        className="p-6 text-lg text-black  bg-white rounded shadow">
        <BounceInScroll viewAmount={0.3}>
          <h2 className="text-xl font-black text-center">{name}</h2>
          <div className="mt-6 text-lg text-left lg:text-left md:text-left">
            <p className="description">{description}</p>
            <p className="mt-6 text-left md:text-left lg:text-left">
              Teknologier: {subdescription}
            </p>
            <div className="flex justify-center mt-6">
              {projectimage && (
                <Image
                  className="lg:h-[250px] lg:w-[500px]"
                  width="250"
                  height="500"
                  src={urlFor(projectimage).url() as string}
                  alt={name}
                  priority
                />
              )}
            </div>
            <div className="flex justify-center mt-4">
              {/* Display only Github button if not empty  */}
              {urlgithub && <LinkButton url={urlgithub[0].url} text="Github" name={name} />}
              {urlwww && <LinkButton url={urlwww[0].url} text="Besøk" name={name} />}
            </div>
          </div>
        </BounceInScroll>
      </div>
    ))}
  </div>
);

export default ProsjekterSingleProject;

import { useState } from "react";

import ProsjekterSingleProject from "./ProsjekterSingleProject.component";
import PageHeader from "../UI/PageHeader.component";

interface ICategories {
  id: number;
  name: string;
}

export interface IProjectCategory extends IProject {
  categories: Array<ICategories>;
}

export interface IProject {
  projects: Array<IProjectInterface>;
}

export type TStringOrEmpty = string | undefined;

export interface IProjectUrl {
  _key: string;
  _type: string;
  external: boolean;
  url: string;
}

export interface IProjectInterface {
  _id: string;
  id?: null | number;
  name: string;
  description: string;
  subdescription: string;
  urlgithub?: Array<IProjectUrl>;
  urlwww?: Array<IProjectUrl>;
  category: string;
  projectimage: string;
  categoryname: string;
}

export interface IChangeEvent {
  target: { value: string };
}

/**
 * Renders a listing of all the portfolio projects.
 * Fetches data from Sanity and prosjekter.tsx with getStaticProps
 * @function ProsjekterListings
 * @param {IProjectInterface[]} projects - Projects that is retrieved from Sanity in prosjekter.tsx
 * @param {string[]} categories - Categories that is retrieved from Sanity in prosjekter.tsx
 * @returns {JSX.Element} - Rendered component
 */

const ProsjekterListings = ({ projects, categories }: IProjectCategory) => {
  const [prosjekt, setProsjekt] = useState(projects);

  const handleFilterChange = (event: IChangeEvent) => {
    setProsjekt(projects);
    if (event.target.value) {
      setProsjekt(projects.filter((project) => project.categoryname === event.target.value));
    }
  };

  return (
    <main role="main" aria-label="Innhold portefølje" className="mt-32 bg-graybg">
      <PageHeader>Prosjekter</PageHeader>
      <div className="container mx-auto rounded">
        <div className="px-4 mx-auto mt-4 lg:px-0 xl:px-0 md:px-0">
          <span className="flex justify-end mb-4">
            <label
              className="p-2 mr-4 text-lg"
              aria-label="kategorifilter"
              htmlFor="kategorifilter"
            >
              Filtrer kategori:
            </label>
            <select
              id="kategorifilter"
              name="kategorifilter"
              data-cy="kategorifilter"
              onChange={handleFilterChange}
              className="w-40 p-2 bg-white text-black rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            >
              <option label="" value="">
                Ingen filtrering
              </option>
              {categories?.map(({ id, name }) => (
                <option key={id} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </span>
          {prosjekt && <ProsjekterSingleProject projects={prosjekt} />}
        </div>
      </div>
    </main>
  );
};

export default ProsjekterListings;

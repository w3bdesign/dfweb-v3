import { useState } from "react";

import ProsjekterSingleProject from "./ProsjekterSingleProject.component";

export interface IProjectCategory extends IProject {
  categories: Array<string>;
}

export interface IProject {
  projects: Array<IProjectInterface>;
}

export type TStringOrEmpty = string | undefined;

export interface IProjectInterface {
  _id: string;
  id: null | undefined | number;
  name: string;
  description: string;
  subdescription: string;
  urlgithub: string;
  urlwww: TStringOrEmpty;
  category: string;
  projectimage: string;
}

export interface IChangeEvent {
  target: { value: string };
}

const ProsjekterListings = ({ projects, categories }: IProjectCategory): JSX.Element => {
  const [prosjekt, setProsjekt] = useState(projects);

  const handleFilterChange = (event: IChangeEvent) => {
    if (event.target.value) {
      setProsjekt(projects.filter((project) => project.category === event.target.value));
    } else {
      setProsjekt(projects);
    }
  };

  return (
    <main aria-label="Innhold portefølje" className="mt-32 bg-graybg">
      <div className="container mx-auto rounded">
        <div className="px-4 mx-auto mt-4 lg:px-0 xl:px-0 md:px-0">
          <span className="flex justify-end mb-4">
            <form>
              <label
                className="p-2 mr-4 text-lg"
                aria-label="kategorifilter"
                htmlFor="kategorifilter">
                Filtrer kategori:
              </label>
              <select
                id="kategorifilter"
                name="kategorifilter"
                onChange={handleFilterChange}
                className="w-40 p-2 leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
                <option label="" value="">
                  Ingen filtrering
                </option>
                {categories?.map((category: string, id: number) => (
                  <option key={id} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </form>
          </span>
          <div
            id="prosjektgrid"
            className="grid gap-4 pt-4 pb-4 lg:px-0 xl:px-0 md:px-0 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 xs:grid-cols-1">
            {prosjekt && <ProsjekterSingleProject projects={prosjekt} />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProsjekterListings;

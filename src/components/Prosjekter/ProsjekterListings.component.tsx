import { NextPage } from "next";

import ProsjektProjects from "./ProsjektIndividualProjects.component";

interface IProject {
  project: IProjectInterface;
}

type TStringOrEmpty = string | null | undefined;
interface IProjectInterface {
  //[x: string]: any;
  _id: string;
  id: null | undefined | number;
  name: TStringOrEmpty;
  description: TStringOrEmpty;
  subdescription: TStringOrEmpty;
  urlgithub: TStringOrEmpty;
  urlwww: TStringOrEmpty;
}



const ProsjekterListings: NextPage<IProject> = ({ project }) => {
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
                //onChange={handleFilterChange}
                className="w-40 p-2 leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
                <option label="" value="">
                  Ingen filtrering
                </option>
                {/*CATEGORIES &&
                  CATEGORIES.map(({ id, name }) => (
                    <option key={id} value={name}>
                      {name}
                    </option>
                  ))*/}
              </select>
            </form>
          </span>

          <ProsjektProjects
            // filter={categoryFilter}
            projects={project}
          />
        </div>
      </div>
    </main>
  );
};

export default ProsjekterListings;

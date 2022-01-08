import { NextPage } from "next";
import Image from "next/image";

import { urlFor } from "../../lib/sanity";
import ProsjektProjects from "./ProsjektProjects.component";

interface IProject {
  project: IProjectInterface;
}

type TStringOrEmpty = string | null | undefined;
interface IProjectInterface {
  [x: string]: any;
  _id: string;
  id: null | undefined | number;
  name: TStringOrEmpty;
  description: TStringOrEmpty;
  subdescription: TStringOrEmpty;
  urlgithub: TStringOrEmpty;
  urlwww: TStringOrEmpty;
}

/* 
  return (
    <>
      <h1 className="text-5xl text-rose-500 text-center">
        Velkommen til Prosjekter denne er fra komponenten
      </h1>
      {project.map((post: IProjectInterface) => (
        <div className="mt-24" key={post._id}>
          <li>{post.id}</li>
          <li>{post.name}</li>
          <li>{post.description}</li>
          <li>{post.subdescription}</li>
          <li>
            {post.projectimage && (
              <Image
                height="255"
                width="500"
                src={urlFor(post.projectimage).url() as string}
                alt="Test"
              />
            )}
          </li>
          <li>{post.urlgithub}</li>
          <li>{post.urlwww}</li>
        </div>
      ))}
}
*/

const ProsjekterContent: NextPage<IProject> = ({ project }) => {
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

export default ProsjekterContent;

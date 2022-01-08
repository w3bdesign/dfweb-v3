// import type { NextComponentType } from "next";

import { urlFor } from "../../lib/sanity";

import Image from "next/image";

type StringOrEmpty = string | null | undefined;
interface IProjectInterface {
  [x: string]: any;
  _id: string;
  id: null | undefined | number;
  name: StringOrEmpty;
  description: StringOrEmpty;
  subdescription: StringOrEmpty;
  urlgithub: StringOrEmpty;
  urlwww: StringOrEmpty;
}

//const ProsjekterContent: NextComponentType = ({ project }) => {
const ProsjekterContent: any = ({ project }: any) => {
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
              <Image height="255" width="500" src={urlFor(post.projectimage).url()} alt="Test" />
            )}
          </li>
          <li>{post.urlgithub}</li>
          <li>{post.urlwww}</li>
        </div>
      ))}
    </>
  );
};

export default ProsjekterContent;

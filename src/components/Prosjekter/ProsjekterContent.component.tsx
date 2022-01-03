// import type { NextComponentType } from "next";

type StringOrEmpty = string | null | undefined;
interface ProjectInterface {
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
      {project.map((post: ProjectInterface) => (
        <div className="mt-24" key={post._id}>
          <li>{post.id}</li>
          <li>{post.name}</li>
          <li>{post.description}</li>
          <li>{post.subdescription}</li>
          <li>post.projectimage</li>
          <li>{post.urlgithub}</li>
          <li>{post.urlwww}</li>
        </div>
      ))}
    </>
  );
};

export default ProsjekterContent;

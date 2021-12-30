import type { NextPage } from "next";

import client from "../client";

import ProsjekterContent from "../components/Prosjekter/ProsjekterContent.component";
import Layout from "../components/Layout/Layout.component";

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

const Prosjekter: NextPage = ({ project }: any) => {
  console.log(project);
  return (
    <>
      <Layout title="Prosjekter - Portefølje - Dfweb">
        {project.map((post: ProjectInterface) => (
          <div key={post._id}>
            <li>{post.id}</li>
            <li>{post.name}</li>
            <li>{post.description}</li>
            <li>{post.subdescription}</li>
            <li>post.projectimage</li>
            <li>{post.urlgithub}</li>
            <li>{post.urlwww}</li>
          </div>
        ))}
        <ProsjekterContent />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const project = await client.fetch(
    `
    *[_type == "project"]
  `
  );
  return {
    props: {
      project,
    },
  };
}

export default Prosjekter;

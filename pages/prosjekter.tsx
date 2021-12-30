import type { NextPage } from "next";

import client from "../client";

import ProsjekterContent from "../components/Prosjekter/ProsjekterContent.component";
import Layout from "../components/Layout/Layout.component";


const Prosjekter: NextPage = ({ project }: any) => {
  console.log(project);
  return (
    <>
      <Layout title="Prosjekter - Portefølje - Dfweb">
        Du er på prosjekter siden
        <br />
        {project.map((post) => (
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
        {project && <span>{project.id}</span>}
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

import type { NextPage } from "next";

import client from "../client";

import ProsjekterContent from "../components/Prosjekter/ProsjekterContent.component";
import Layout from "../components/Layout/Layout.component";

const Prosjekter: NextPage = ({ project }: any) => {
  return (
    <>
      <Layout title="Prosjekter - Portefølje - Dfweb">
        <ProsjekterContent project={project} />
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
      project
    }
  };
}

export default Prosjekter;

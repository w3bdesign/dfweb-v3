import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

import client from "../lib/sanityClient";

import ProsjekterContent from "../components/Prosjekter/ProsjekterContent.component";
import Layout from "../components/Layout/Layout.component";

const Prosjekter: NextPage = ({ project }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Layout title="Prosjekter - Portefølje - Dfweb">
        <ProsjekterContent project={project} />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
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

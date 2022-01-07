import { groq } from "next-sanity";

import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

// Utilities
import { getClient } from "../lib/sanity.server";

//import client from "../lib/sanityClient";

import ProsjekterContent from "../components/Prosjekter/ProsjekterContent.component";
import Layout from "../components/Layout/Layout.component";

const projectQuery = groq`
*[_type == "project"]
`;

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
  const project = await getClient({}).fetch(projectQuery);

  return {
    props: {
      project
    }
  };
};

export default Prosjekter;

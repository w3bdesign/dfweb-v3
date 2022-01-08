import { groq } from "next-sanity";

// Types
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

// Utilities
import { getClient } from "../lib/sanity.server";

// Components
import ProsjekterContent from "../components/Prosjekter/ProsjekterListings.component";
import Layout from "../components/Layout/Layout.component";

// Sanity GROQ queries
const projectQuery = groq`
*[_type == "project"]
`;

const categoryQuery = groq`*[_type == 'project'].category[0..3]`;

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
  const categories = await getClient({}).fetch(categoryQuery);

  return {
    props: {
      project,
      categories
    }
  };
};

export default Prosjekter;

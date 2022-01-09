import { groq } from "next-sanity";

// Types
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

// Utilities
import { getClient } from "../lib/sanity.server";

// Components
import ProsjekterListings from "../components/Prosjekter/ProsjekterListings.component";
import Layout from "../components/Layout/Layout.component";

// Sanity GROQ queries
const projectQuery = groq`*[_type == "project"]
`;

const categoryQuery = groq`*[_type == "project"].category[0..3]`;

const Prosjekter: NextPage = ({
  projects,
  categories
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Layout title="Prosjekter - Portefølje - Dfweb">
        <ProsjekterListings projects={projects} categories={categories} />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getClient({}).fetch(projectQuery);
  const categories = await getClient({}).fetch(categoryQuery);

  return {
    props: {
      projects,
      categories
    }
  };
};

export default Prosjekter;

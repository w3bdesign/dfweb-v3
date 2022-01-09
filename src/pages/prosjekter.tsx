import { groq } from "next-sanity";

// Types
import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";

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
  project,
  categories
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Layout title="Prosjekter - Portefølje - Dfweb">
        <ProsjekterListings project={project} categories={categories} />
      </Layout>
    </>
  );
};


export const getServerSideProps: GetServerSideProps = async () => {
  const project = await getClient({}).fetch(projectQuery);
  const categories = await getClient({}).fetch(categoryQuery);

  console.log("Static categories: ", categories);

  return {
    props: {
      project,
      categories
    }
  };
};

export default Prosjekter;

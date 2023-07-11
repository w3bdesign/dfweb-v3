// Types
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

// Utilities
import { getClient } from "@/lib/sanity.server";

// Components
import ProsjekterListings from "@/components/Prosjekter/ProsjekterListings.component";
import Layout from "@/components/Layout/Layout.component";

// Import Sanity GROQ queries
import { projectQuery } from "@/queries/sanityQueries";

/**
 * Renders the Prosjekter page.
 *
 * @param {Array} projects - The list of projects.
 * @param {Array} categories - The list of categories.
 * @param {Object} navigation - The navigation object.
 * @return {JSX.Element} The rendered Prosjekter page.
 */
const Prosjekter: NextPage = ({
  projects,
  categories,
  navigation
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Layout title="Prosjekter" links={navigation}>
    <ProsjekterListings projects={projects} categories={categories} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const data = await getClient(false).fetch(projectQuery);

  return {
    props: data
  };
};

export default Prosjekter;

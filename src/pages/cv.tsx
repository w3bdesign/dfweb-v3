// Types
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

// Utilities
import { getClient } from "../lib/sanity.server";

// Components
import CVContent from "../components/CV/CVContent.component";
import Layout from "../components/Layout/Layout.component";

// Sanity GROQ query
import { navigationQuery } from "../queries/sanityQueries";

const CV: NextPage = ({ navigation }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout title="CV" links={navigation}>
      <CVContent />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getClient(false).fetch(navigationQuery);

  return {
    props: data
  };
};

export default CV;

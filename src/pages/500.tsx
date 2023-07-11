// Types
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

// Utilities
import { getClient } from "../lib/sanity.server";

//Components
import Layout from "../components/Layout/Layout.component";
import ErrorContent from "../components/Error/ErrorContent.component";

// Sanity GROQ query
import { navigationQuery } from "../queries/sanityQueries";

const Custom500: NextPage = ({ navigation }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Layout title="Feil - 500" links={navigation}>
    <ErrorContent text="Feil - 500" />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const data = await getClient(false).fetch(navigationQuery);

  return {
    props: data
  };
};

export default Custom500;

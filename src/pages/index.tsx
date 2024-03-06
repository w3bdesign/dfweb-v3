// Types
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";

// Components
import IndexContent from "../components/Index/IndexContent.component";
import Layout from "../components/Layout/Layout.component";

// Utilities
import { getClient } from "../lib/sanity.server";

// Sanity GROQ query
import { indexQuery } from "../queries/sanityQueries";

const Home: NextPage = ({
  pageContent,
  navigation
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Layout title="Forside" links={navigation}>
    <IndexContent pageContent={pageContent} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const data = await getClient(false).fetch(indexQuery);

  return {
    props: data
  };
};

export default Home;

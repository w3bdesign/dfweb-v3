// Types
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";

// Utilities
import { getClient } from "../lib/sanity.server";

// Components
import KontaktContent from "../components/Kontakt/KontaktContent.component";
import Layout from "../components/Layout/Layout.component";

// Sanity GROQ query
import { navigationQuery } from "../queries/sanityQueries";

const Kontakt: NextPage = ({ navigation }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Layout title="Kontakt" links={navigation}>
    <KontaktContent />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const data = await getClient(false).fetch(navigationQuery);

  return {
    props: data
  };
};

export default Kontakt;

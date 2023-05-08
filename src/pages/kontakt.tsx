// Package imports
import { groq } from "next-sanity";

// Types
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";

// Utilities
import { getClient } from "../lib/sanity.server";

// Components
// import KontaktContent from "../components/Kontakt/KontaktContent.component";
import Layout from "../components/Layout/Layout.component";

// Sanity GROQ queries
const navigationQuery = groq`*[_type == "Links"]{id, Text, Url} | order(id asc)`;

const Kontakt: NextPage = ({ navigation }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Layout title="Kontakt" links={navigation}>
    KontaktContent
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const navigation = await getClient(false).fetch(navigationQuery);

  return {
    props: {
      navigation
    }
  };
};

export default Kontakt;

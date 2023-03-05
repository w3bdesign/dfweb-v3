// Package imports
import { groq } from "next-sanity";

// Types
import type { InferGetStaticPropsType, NextPage } from "next";

// Utilities
import { getClient } from "../lib/sanity.server";

// Components
import CVContent from "../components/CV/CVContent.component";
import Layout from "../components/Layout/Layout.component";

// Sanity GROQ queries
const navigationQuery = groq`*[_type == 'Links']{id, Text, Url} | order(id asc)`;

const CV: NextPage = ({ navigation }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Layout title="CV" links={navigation}>
    <CVContent />
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

export default CV;

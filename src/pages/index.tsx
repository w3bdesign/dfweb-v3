// Package imports
import { groq } from "next-sanity";

// Types
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";

// Components
import IndexContent from "../components/Index/IndexContent.component";
import Layout from "../components/Layout/Layout.component";

// Utilities
import { getClient } from "../lib/sanity.server";

// Sanity GROQ queries
const indexQuery = groq`*[_type == 'page' && title match 'Hjem']{"id": _id, title, content}`;

const Home: NextPage = ({ pagecontent }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Layout title="Forside">
    <IndexContent pagecontent={pagecontent} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const pagecontent = await getClient(false).fetch(indexQuery);

  return {
    props: {
      pagecontent
    }
  };
};

export default Home;

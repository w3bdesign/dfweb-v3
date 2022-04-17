// Package imports
import { groq } from "next-sanity";

// Types
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";

// Components
import SanityContent from "../components/Sanity/SanityContent.component";
import Layout from "../components/Layout/Layout.component";

// Utilities
import { getClient } from "../lib/sanity.server";

// Sanity GROQ queries

const sanityQuery = groq`*[_type == 'page' && title match 'Hjem']{"id": _id, title, content}`;

const Home: NextPage = ({ pagecontent }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Layout title="Sanity">
    <SanityContent pagecontent={pagecontent} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const pagecontent = await getClient(false).fetch(sanityQuery);

  console.log("pagecontent: ", pagecontent);



  return {
    props: {
      pagecontent
    }
  };
};

export default Home;

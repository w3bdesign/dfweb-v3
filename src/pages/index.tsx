// Package imports
import { groq } from "next-sanity";

// Types
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";

// Components
import IndexContent from "../components/Index/IndexContent.component";
import Layout from "../components/Layout/Layout.component";

// Utilities
import { getClient } from "../lib/sanity.server";

// Sanity GROQ query
const query = groq`
{
  "pageContent": *[_type == 'page' && title match 'Hjem']{"id": _id, title, hero, content},
  "navigation": *[_type == 'Links']{id, Text, Url} | order(id asc)
}
`;

const Home: NextPage = ({
  pageContent,
  navigation
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Layout title="Forside" links={navigation}>
    <IndexContent pageContent={pageContent} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const data = await getClient(false).fetch(query);

  return {
    props: data
  };
};

export default Home;

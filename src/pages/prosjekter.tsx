// Package imports
import { groq } from "next-sanity";

// Types
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

// Utilities
import { getClient } from "../lib/sanity.server";

// Components
import ProsjekterListings from "../components/Prosjekter/ProsjekterListings.component";
import Layout from "../components/Layout/Layout.component";

// Sanity GROQ query
const query = groq`
{
  "projects": *[_type == "project"]{  ...,  "categoryname": projectcategory->name, "imageurl": projectimage.asset->url} | order(id asc),
  "categories": *[_type == "category"]{ id, name } | order(id asc),
  "navigation": *[_type == 'Links']{id, Text, Url} | order(id asc)
}
`;

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
  const data = await getClient(false).fetch(query);

  return {
    props: data
  };
};

export default Prosjekter;

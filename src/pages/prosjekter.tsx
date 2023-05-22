// Package imports
import { groq } from "next-sanity";

// Types
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

// Utilities
import { getClient } from "../lib/sanity.server";

// Components
import ProsjekterListings from "../components/Prosjekter/ProsjekterListings.component";
import Layout from "../components/Layout/Layout.component";

// Sanity GROQ queries
const projectQuery = groq`*[_type == "project"]{  ...,  "categoryname": projectcategory->name, "imageurl": projectimage.asset->url} | order(id asc)`;
const categoryQuery = groq`*[_type == "category"]{ id, name } | order(id asc)`;
const navigationQuery = groq`*[_type == "Links"]{id, Text, Url} | order(id asc)`;

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
  const projects = await getClient(false).fetch(projectQuery);
  const categories = await getClient(false).fetch(categoryQuery);
  const navigation = await getClient(false).fetch(navigationQuery);

  return {
    props: {
      projects,
      categories,
      navigation
    }
  };
};

export default Prosjekter;

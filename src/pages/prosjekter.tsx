import { groq } from "next-sanity";
import { AnimatePresence, motion } from "framer-motion";

// Types
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

// Utilities
import { getClient } from "../lib/sanity.server";

// Components
import ProsjekterListings from "../components/Prosjekter/ProsjekterListings.component";
import Layout from "../components/Layout/Layout.component";

// Animations
import { pageTransitionVariants } from "../animations/variants";

// Sanity GROQ queries
const projectQuery = groq`*[_type == "project"]`;
const categoryQuery = groq`*[_type == "project"].category[0..3]`;

const Prosjekter: NextPage = ({
  projects,
  categories
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Layout title="Prosjekter - Portefølje - Dfweb">
    <AnimatePresence exitBeforeEnter>
      <motion.div variants={pageTransitionVariants} initial="initial" animate="animate" exit="exit">
        <ProsjekterListings projects={projects} categories={categories} />
      </motion.div>
    </AnimatePresence>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getClient(false).fetch(projectQuery);
  const categories = await getClient(false).fetch(categoryQuery);

  return {
    props: {
      projects,
      categories
    }
  };
};

export default Prosjekter;

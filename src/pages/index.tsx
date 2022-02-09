import { groq } from "next-sanity";
import { AnimatePresence, motion } from "framer-motion";

// Types
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";

// Components
import IndexContent from "../components/Index/IndexContent.component";
import Layout from "../components/Layout/Layout.component";

// Utilities
import { getClient } from "../lib/sanity.server";

// Animations
import { pageTransitionVariants } from "../animations/variants";

// Sanity GROQ queries
const indexQuery = groq`
*[_type == 'sitecontent' && pagename match 'Index']
`;

const Home: NextPage = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Layout title="Forside - Portefølje - Dfweb">
    <AnimatePresence exitBeforeEnter>
      <motion.div variants={pageTransitionVariants} initial="initial" animate="animate" exit="exit">
        <IndexContent post={post} />
      </motion.div>
    </AnimatePresence>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const post = await getClient(false).fetch(indexQuery);

  return {
    props: {
      post
    }
  };
};

export default Home;

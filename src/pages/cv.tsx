import { AnimatePresence, motion } from "framer-motion";

// Types
import type { NextPage } from "next";

// Animations
import { pageTransitionVariants } from "../animations/variants";

// Components
import CVContent from "../components/CV/CVContent.component";
import Layout from "../components/Layout/Layout.component";

const CV: NextPage = () => (
  <Layout title="CV - Portefølje - Dfweb">
    <AnimatePresence exitBeforeEnter>
      <motion.div variants={pageTransitionVariants} initial="initial" animate="animate" exit="exit">
        <CVContent />
      </motion.div>
    </AnimatePresence>
  </Layout>
);

export default CV;

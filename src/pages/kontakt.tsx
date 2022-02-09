import { AnimatePresence, motion } from "framer-motion";

// Types
import type { NextPage } from "next";

// Components
import KontaktContent from "../components/Kontakt/KontaktContent.component";
import Layout from "../components/Layout/Layout.component";

// Animations
import { pageTransitionVariants } from "../animations/variants";

const Kontakt: NextPage = () => (
  <Layout title="Kontakt - Portefølje - Dfweb">
    <AnimatePresence exitBeforeEnter>
      <motion.div variants={pageTransitionVariants} initial="initial" animate="animate" exit="exit">
        <KontaktContent />
      </motion.div>
    </AnimatePresence>
  </Layout>
);

export default Kontakt;

// Types
import type { NextPage } from "next";

// Animations
import PageTransition from "../components/Animations/PageTransition.component";

// Components
import CVContent from "../components/CV/CVContent.component";
import Layout from "../components/Layout/Layout.component";

const CV: NextPage = () => (
  <Layout title="CV - Portefølje - Dfweb">
    <PageTransition>
      <CVContent />
    </PageTransition>
  </Layout>
);

export default CV;

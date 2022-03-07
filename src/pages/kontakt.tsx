import dynamic from "next/dynamic";
// Types
import type { NextPage } from "next";

// Components
const KontaktContent = dynamic(() => import("../components/Kontakt/KontaktContent.component"), {
  ssr: false
});
import Layout from "../components/Layout/Layout.component";

// Animations
import PageTransition from "../components/Animations/PageTransition.component";

const Kontakt: NextPage = () => (
  <Layout title="Kontakt">
    <PageTransition>
      <KontaktContent />
    </PageTransition>
  </Layout>
);

export default Kontakt;

// Types
import type { NextPage } from "next";

// Components
import KontaktContent from "../components/Kontakt/KontaktContent.component";
import Layout from "../components/Layout/Layout.component";

// Animations
import { PageTransition } from "../animations/functions";

const Kontakt: NextPage = () => (
  <Layout title="Kontakt - Portefølje - Dfweb">
    <PageTransition>
      <KontaktContent />
    </PageTransition>
  </Layout>
);

export default Kontakt;

import type { NextPage } from "next";

import KontaktContent from "../components/Kontakt/KontaktContent.component";
import Layout from "../components/Layout/Layout.component";

const Home: NextPage = () => {
  return (
    <>
      <Layout title="Kontakt - Portefølje - Dfweb">
        <KontaktContent />
      </Layout>
    </>
  );
};

export default Home;

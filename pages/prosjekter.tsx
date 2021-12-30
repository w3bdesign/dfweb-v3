import type { NextPage } from "next";

import ProsjekterContent from "../components/Prosjekter/ProsjekterContent.component";
import Layout from "../components/Layout/Layout.component";

const Prosjekter: NextPage = () => {
  return (
    <>
      <Layout title="Prosjekter - Portefølje - Dfweb">
        <ProsjekterContent />
      </Layout>
    </>
  );
};

export default Prosjekter;

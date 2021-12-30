import type { NextPage } from "next";

import IndexContent from "../components/Index/IndexContent.component";
import Layout from "../components/Layout/Layout.component";

const Home: NextPage = () => {
  return (
    <>
      <Layout title="Forside - Portefølje - Dfweb">
        <IndexContent />
      </Layout>
    </>
  );
};

export default Home;

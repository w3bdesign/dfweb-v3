import type { NextPage } from "next";

import CVContent from "../components/CV/CVContent.component";
import Layout from "../components/Layout/Layout.component";

const Home: NextPage = () => {
  return (
    <>
      <Layout title="CV - Portefølje - Dfweb">
        <CVContent />
      </Layout>
    </>
  );
};

export default Home;

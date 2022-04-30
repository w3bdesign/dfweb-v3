// Types
import type { NextPage } from "next";

//Components
import Layout from "../components/Layout/Layout.component";
import ErrorContent from "../components/Error/ErrorContent.component";

const Custom500: NextPage = () => (
  <Layout title="Feil - 500">
    <ErrorContent text="Feil - 500" />
  </Layout>
);

export default Custom500;

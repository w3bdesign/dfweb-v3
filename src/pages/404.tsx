// Types
import type { NextPage } from "next";

//Components
import Layout from "../components/Layout/Layout.component";
import ErrorContent from "../components/Error/ErrorContent.component";

const Custom404: NextPage = () => (
  <Layout title="Side ikke funnet - 404">
    <ErrorContent text="Side ikke funnet" />
  </Layout>
);

export default Custom404;

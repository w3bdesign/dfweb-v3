// Package imports
import dynamic from "next/dynamic";

// Types
import type { NextPage } from "next";

// Components
const CVContent = dynamic(() => import("../components/CV/CVContent.component"), {
  loading: () => <p>Laster inn CV ...</p>
});
import Layout from "../components/Layout/Layout.component";

const CV: NextPage = () => (
  <Layout title="CV">
    <CVContent />
  </Layout>
);

export default CV;

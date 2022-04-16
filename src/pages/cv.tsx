// Package imports
import dynamic from "next/dynamic";

// Types
import type { NextPage } from "next";

// Components
import CVContent from "../components/CV/CVContent.component";
import Layout from "../components/Layout/Layout.component";

const CV: NextPage = () => (
  <Layout title="CV">
    <CVContent />
  </Layout>
);

export default CV;

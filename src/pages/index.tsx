import { groq } from "next-sanity";

// Types
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";

// Components
import IndexContent from "../components/Index/IndexContent.component";
import Layout from "../components/Layout/Layout.component";

// Utilities
import { getClient } from "../lib/sanity.server";

// Sanity GROQ queries
const indexQuery = groq`
*[_type == 'sitecontent' && pagename match 'Index']
`;

const Home: NextPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Layout title="Forside - Portefølje - Dfweb">
    <IndexContent {...data} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const post = await getClient({}).fetch(indexQuery);

  return {
    props: {
      data: { post }
    }
  };
};

export default Home;

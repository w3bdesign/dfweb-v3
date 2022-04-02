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

const Home: NextPage = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Layout title="Forside">
      <IndexContent post={post} />
    </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const post = await getClient(false).fetch(indexQuery);

  return {
    props: {
      post
    }
  };
};

export default Home;

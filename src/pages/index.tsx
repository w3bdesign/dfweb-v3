import { groq } from "next-sanity";

// Types
import type { NextPage } from "next";
import type { GetStaticProps } from "next";
import type { InferGetStaticPropsType } from "next";
import type { Sitecontent } from "../types/sanity.types";

// Components
import IndexContent from "../components/Index/IndexContent.component";
import Layout from "../components/Layout/Layout.component";

// Utilities
import { getClient } from "../lib/sanity.server";

const indexQuery = groq`
*[_type == 'sitecontent' && pagename match 'Index']
`;

const Home: NextPage<Sitecontent> = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Layout title="Forside - Portefølje - Dfweb">
        <IndexContent {...data} />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const post = await getClient({}).fetch(indexQuery);

  return {
    props: {
      data: { post }
    }
  };
};

export default Home;

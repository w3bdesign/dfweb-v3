import { groq } from "next-sanity";

import { usePreviewSubscription, urlFor } from "../lib/sanity";
import { getClient } from "../lib/sanity.server";

import type { NextPage } from "next";

import IndexContent from "../components/Index/IndexContent.component";
import Layout from "../components/Layout/Layout.component";

const indexQuery = groq`
*[_type == 'sitecontent' && pagename match 'Index']
`;




//const Home: NextPage = ({ data }) => {
const Home: NextPage<any> = ({ data }) => {
  /*const { data: post } = usePreviewSubscription(indexQuery, {
    params: { slug: data.post?.slug },
    initialData: data.post
    //enabled: preview && data.post?.slug
  });*/

  console.log("Data fra props: ", data);

  return (
    <>
      <Layout title="Forside - Portefølje - Dfweb">
        <IndexContent {...data} />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const post = await getClient({}).fetch(indexQuery);

  return {
    props: {
      data: { post }
    }
  };
}

export default Home;

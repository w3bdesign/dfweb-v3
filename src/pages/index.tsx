import { groq } from "next-sanity";

import { usePreviewSubscription, urlFor, PortableText } from "../lib/sanity";
import { getClient } from "../lib/sanity.server";

import type { NextPage } from "next";

import IndexContent from "../components/Index/IndexContent.component";
import Layout from "../components/Layout/Layout.component";

const indexQuery = groq`
*[_type == 'sitecontent' && pagename match 'Index']
`;

const Home: NextPage = ({ data, preview }) => {
  const { data: post } = usePreviewSubscription(indexQuery, {
    params: { slug: data.post?.slug },
    initialData: data.post,
    enabled: preview && data.post?.slug
  });

  // console.log("Post: ", post);

  const { title, text } = post;

  return (
    <>
      <Layout title="Forside - Portefølje - Dfweb">
        <IndexContent />

        {post.map((post: any) => (
          <div className="mt-24" key={post._id}>
            
            <h2>{post.title}</h2>
            <li><PortableText blocks={post.text} /></li>
            
          </div>
        ))}

        
     
        
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const post = await getClient("test").fetch(indexQuery);
  console.log("Data index Sanity: ", post);

  return {
    props: {
      data: { post }
    }
  };
}

/*export async function getStaticProps() {
  const content = await client.fetch(
    `
    *[_type == "project"]
  `
  );
  return {
    props: {
      project
    }
  };
}*/

export default Home;

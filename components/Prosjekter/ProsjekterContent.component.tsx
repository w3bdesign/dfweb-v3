import type { NextComponentType } from "next";

import client from "../../client";

import styles from "../../styles/Home.module.css";

const ProsjekterContent: NextComponentType = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Velkommen til Prosjekter</h1>
      </main>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = await client.fetch(`*[_type == "project"`);
  console.log(paths)

  return {
    //paths: paths.map((slug: any) => ({params: {slug}})),
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context: {
  params: { slug?: "" | undefined };
}) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const project = await client.fetch(
    `
    *[_type == "project"
  `,
    { slug }
  );
  return {
    props: {
      project,
    },
  };
}

export default ProsjekterContent;

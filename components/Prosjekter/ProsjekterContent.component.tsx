import type { NextComponentType } from "next";

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

export default ProsjekterContent;

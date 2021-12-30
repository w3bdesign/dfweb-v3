import type { NextComponentType } from "next";

import styles from "../../styles/Home.module.css";

const IndexContent: NextComponentType = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Velkommen til Index</h1>
      </main>
    </div>
  );
};

export default IndexContent;

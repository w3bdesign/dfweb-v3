import type { NextComponentType } from "next";

import styles from "../../styles/Home.module.css";

const IndexContent: NextComponentType = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className="text-5xl text-rose-500 text-center">Velkommen til Index denne er i komponenten</h1>
      </main>
    </div>
  );
};

export default IndexContent;

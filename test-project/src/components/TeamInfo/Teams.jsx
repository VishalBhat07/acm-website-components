import React from "react";
import styles from "./TeamPage.module.css";
import TeamDesign1 from "./Design1";
import TeamDesign2 from "./Design2";

const Teams = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Team Page Designs</h1>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Design 1:</h2>
        <div className={styles.designContainer}>
          <TeamDesign1 />
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Design 2:</h2>
        <div className={styles.designContainer}>
          <TeamDesign2 />
        </div>
      </div>

      {/* <div className={styles.divider}></div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Design 3:</h2>
        <div className={styles.designContainer}>
          <TeamDesign3 />
        </div>
      </div> */}
    </div>
  );
};

export default Teams;

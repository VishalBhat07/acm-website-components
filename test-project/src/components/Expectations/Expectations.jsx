import React from "react";
import EventList1 from "./Design1";
import EventList2 from "./Design2";
import EventList3 from "./Design3";
import styles from "./Expectations.module.css";

const Expectations = () => {
  const events = [
    {
      date: "April 15, 2025",
      title: "CodeJam 5.0",
      description:
        "ACM RVCE presents CodeJam 5.0, our flagship coding competition where participants solve complex algorithmic challenges and compete for exciting prizes.",
    },
    {
      date: "March 21, 2025",
      title: "TechTalks",
      description:
        "Join us for a series of enlightening tech talks by industry experts and alumni. Learn about the latest trends in AI, cloud computing, and blockchain technology.",
    },
    {
      date: "February 8, 2025",
      title: "Hackoverflow",
      description:
        "A 24-hour hackathon where teams collaborate to build innovative solutions to real-world problems. Put your skills to the test and create something amazing!",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Expectations Page Designs</h1>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Design 1:</h2>
        <div className={styles.designContainer}>
          <EventList1 events={events} />
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Design 2:</h2>
        <div className={styles.designContainer}>
          <EventList2 events={events} />
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Design 3:</h2>
        <div className={styles.designContainer}>
          <EventList3 events={events} />
        </div>
      </div>
    </div>
  );
};

export default Expectations;

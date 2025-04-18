// Design1.jsx
import React, { useEffect, useRef } from "react";
import styles from "./styles1.module.css";

const Design1 = ({ events }) => {
  const eventsRef = useRef([]);

  useEffect(() => {
    // Set animation index variables for staggered animations
    eventsRef.current.forEach((event, index) => {
      if (event) {
        event.style.setProperty("--index", index);
      }
    });

    // Optional: Add intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.visibility = "visible";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    eventsRef.current.forEach((event) => {
      if (event) {
        observer.observe(event);
      }
    });

    return () => {
      eventsRef.current.forEach((event) => {
        if (event) {
          observer.unobserve(event);
        }
      });
    };
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>What you can expect</h1>
      <div className={styles.eventsList}>
        {events.map((event, index) => (
          <div
            key={index}
            className={styles.eventItem}
            ref={(el) => (eventsRef.current[index] = el)}
            style={{ visibility: "hidden" }}
          >
            <div className={styles.eventDate}>{event.date}</div>
            <div className={styles.eventContent}>
              <h2 className={styles.eventTitle}>{event.title}</h2>
              <p className={styles.eventDescription}>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Design1;

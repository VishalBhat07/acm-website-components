import React, { useEffect, useRef, useState } from "react";
import styles from "./styles3.module.css";

const Design3 = ({ events = [] }) => {
  const eventsRef = useRef([]);
  const [isVisible, setIsVisible] = useState([]);

  useEffect(() => {
    // Initialize visibility state array
    setIsVisible(new Array(events.length).fill(false));

    // Set animation index variables for staggered animations
    eventsRef.current.forEach((event, index) => {
      if (event) {
        event.style.setProperty("--index", index);
      }
    });

    // Set up intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index, 10);
            setIsVisible((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px", // Trigger slightly before the element comes into view
      }
    );

    // Observe all event elements
    eventsRef.current.forEach((event) => {
      if (event) {
        observer.observe(event);
      }
    });

    // Cleanup observer on component unmount
    return () => {
      eventsRef.current.forEach((event) => {
        if (event) {
          observer.unobserve(event);
        }
      });
    };
  }, [events.length]);

  // Function to format date display
  const formatDate = (dateString) => {
    try {
      if (!dateString) return "";

      // Handle both date strings and date objects
      const date =
        typeof dateString === "string" ? new Date(dateString) : dateString;

      // Return formatted month and year
      return date.toLocaleDateString(undefined, {
        month: "short",
        year: "numeric",
      });
    } catch (error) {
      // If parsing fails, return the original string
      return dateString;
    }
  };

  if (!events || events.length === 0) {
    return (
      <div className={styles.container}>No timeline events to display</div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>What you can expect</h1>
      <div className={styles.eventsList}>
        {events.map((event, index) => (
          <div
            key={index}
            className={`${styles.eventItem} ${
              isVisible[index] ? styles.visible : ""
            }`}
            ref={(el) => (eventsRef.current[index] = el)}
            data-index={index}
          >
            <div className={styles.eventDate}>{formatDate(event.date)}</div>
            <div className={styles.eventContent}>
              <h2 className={styles.eventTitle}>{event.title}</h2>
              <p className={styles.eventDescription}>{event.description}</p>
              {event.url && (
                <a
                  href={event.url}
                  className={styles.eventLink}
                  aria-label={`Learn more about ${event.title}`}
                >
                  Learn more →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Design3;

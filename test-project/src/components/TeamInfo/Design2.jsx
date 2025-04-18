import React, { useState } from "react";
import styles from "./TeamDesign2.module.css";
import timcheese from "/timcheese.png";
import tuntungsahur from "/tungtungsahur.jpeg";
import pengu from "/pengu.png";
import simonclaw from "/simonclaw.png";

const TeamDesign2 = () => {
  const [activeYear, setActiveYear] = useState(2024);
  const allYears = [2022, 2023, 2024];
  const teamMembers = [
    {
      name: "Tim Cheese",
      role: "Chairperson",
      image: timcheese,
      socials: {
        email: "mailto:param@example.com",
        linkedin: "https://linkedin.com/in/param",
        github: "https://github.com/param",
      },
    },
    {
      name: "Tung Tung Sahur",
      role: "Vice-Chairperson",
      image: tuntungsahur,
      socials: {
        email: "mailto:vatsal@example.com",
        linkedin: "https://linkedin.com/in/vatsal",
        github: "https://github.com/vatsal",
      },
    },
    {
      name: "Pengu",
      role: "Secretary",
      image: pengu,
      socials: {
        email: "mailto:anoushka@example.com",
        linkedin: "https://linkedin.com/in/anoushka",
        github: "https://github.com/anoushka",
      },
    },
    {
      name: "Simon Claw",
      role: "Secretary",
      image: simonclaw,
      socials: {
        email: "mailto:raj@example.com",
        linkedin: "https://linkedin.com/in/raj",
        github: "https://github.com/anoushka",
      },
    },
  ];

  return (
    <div className={styles.teamDesign}>
      <div className={styles.yearSelector}>
        {allYears.map((year) => (
          <button
            key={year}
            className={`${styles.yearTab} ${
              year === activeYear ? styles.active : ""
            }`}
            onClick={() => setActiveYear(year)}
          >
            {year}
          </button>
        ))}
      </div>
      <div className={styles.container}>
        <h1 className={styles.heading}>Team of {activeYear}</h1>
        <div className={styles.teamCards}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.memberCard}>
              <div className={styles.cardFront}>
                <div className={styles.memberPhoto}>
                  <img src={member.image} alt={member.name} />
                </div>
                <div className={styles.memberDetails}>
                  <h2>{member.name}</h2>
                  <p>{member.role}</p>
                </div>
              </div>
              <div className={styles.cardBack}>
                <h2>{member.name}</h2>
                <p>{member.role}</p>
                <div className={styles.socialLinks}>
                  {member.socials.email && (
                    <a href={member.socials.email}>
                      📧 <span>Email</span>
                    </a>
                  )}
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin}>
                      🔗 <span>LinkedIn</span>
                    </a>
                  )}
                  {member.socials.github && (
                    <a href={member.socials.github}>
                      🐱 <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamDesign2;

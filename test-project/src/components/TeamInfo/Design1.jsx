// src/components/Team/TeamDesign1.jsx
import React from "react";
import styles from "./TeamDesign1.module.css";
import { Mail, Linkedin, Github } from "lucide-react";
import timcheese from "/timcheese.png"
import tuntungsahur from "/tungtungsahur.jpeg"
import pengu from "/pengu.png"
import simonclaw from "/simonclaw.png"

const TeamDesign1 = () => {
  const years = [[2022, 2023, 2024]];

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
    <div className={styles.teamContainer}>
      <div className={styles.yearsContainer}>
        {years.map((yearGroup, groupIndex) => (
          <div key={groupIndex} className={styles.yearGroup}>
            {yearGroup.map((year) => (
              <button key={year} className={styles.yearButton}>
                {year}
              </button>
            ))}
          </div>
        ))}
      </div>

      <h1 className={styles.teamTitle}>Team of 2024</h1>

      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.teamMember}>
            <div className={styles.imageContainer}>
              <img
                src={member.image}
                alt={member.name}
                className={styles.memberImage}
              />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.memberInfo}>
              <h2>{member.name}</h2>
              <p>{member.role}</p>
              <div className={styles.socialIcons}>
                {member.socials.email && (
                  <a
                    href={member.socials.email}
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail size={20} />
                  </a>
                )}
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    aria-label={`LinkedIn profile of ${member.name}`}
                  >
                    <Linkedin size={20} />
                  </a>
                )}
                {member.socials.github && (
                  <a
                    href={member.socials.github}
                    aria-label={`GitHub profile of ${member.name}`}
                  >
                    <Github size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamDesign1;

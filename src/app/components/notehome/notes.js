"use client";
import React, { useState } from "react";
import styles from "../../styles/quiz/quizcard.module.css";

const NotesCard = () => {
  const [showAll, setShowAll] = useState(false);

  const steps = [
    { img: "image/home/download.png", title: "Choose a Quiz", text: "Select topic: JavaScript, React, HTML, CSS, DSA, etc." },
    { img: "image/home/download.png", title: "Answer Questions", text: "Solve MCQs and coding-based questions." },
    { img: "image/home/download.png", title: "Get Instant Score", text: "See correct answers & explanations instantly." },
    { img: "image/home/download.png", title: "Track Progress", text: "View performance improvement over time." },
    { img: "image/home/download.png", title: "Choose a Quiz", text: "Select topic: JavaScript, React, HTML, CSS, DSA, etc." },
    { img: "image/home/download.png", title: "Answer Questions", text: "Solve MCQs and coding-based questions." },
    { img: "image/home/download.png", title: "Get Instant Score", text: "See correct answers & explanations instantly." },
    { img: "image/home/download.png", title: "Track Progress", text: "View performance improvement over time." }
  ];

  const visibleCards = showAll ? steps : steps.slice(0, 4);

  return (
    <section className={styles.how}>
      <div className={styles.headingRow}>
        <h2>Notes</h2>
      </div>

      <div className={styles.howGrid}>
        {visibleCards.map((step, i) => (
          <div key={i} className={styles.stepCard}>
            <img src={step.img} alt="" className={styles.icon} />
            <h3>{step.title}</h3>
            <p>{step.text}</p>
            <button className={styles.startBtn}>Start</button>
          </div>
        ))}
      </div>

      <div className={styles.btnRow}>
        {!showAll ? (
          <button className={styles.seeMoreBtn} onClick={() => setShowAll(true)}>
            See More →
          </button>
        ) : (
          <button className={styles.seeMoreBtn} onClick={() => setShowAll(false)}>
            ← See Less
          </button>
        )}
      </div>
    </section>
  );
};

export default NotesCard;

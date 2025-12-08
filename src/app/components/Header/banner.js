import React from "react";
import styles from "../../styles/home/banner.module.css";

const Banner = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}></div>

      <div className={styles.heroLeft}>
        <h1>Test Your Coding Skills – Daily Quizzes & Challenges</h1>
        <p>
          Practice JavaScript, React, HTML & CSS quizzes, improve, compete, and track progress.
        </p>

        <div className={styles.heroButtons}>
          <button className={styles.startBtn}>Start Now</button>
          <button className={styles.browseBtn}>Browse All Topics</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;

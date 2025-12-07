import React from "react";
import styles from '../../styles/home/footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Left Section */}
        <div className={styles.left}>
          <h2 className={styles.logo}>CodeBrain</h2>
          <p className={styles.text}>
            Practice daily coding quizzes, challenges & improve your skills.
          </p>
        </div>

        {/* Center Links */}
        <div className={styles.links}>
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Quizzes</li>
            <li>Blog</li>
            <li>About</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className={styles.right}>
          <h3>Follow Us</h3>
          <div className={styles.social}>
            <span>📘</span>
            <span>🐦</span>
            <span>📸</span>
            <span>▶️</span>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        © {new Date().getFullYear()} CodeBrain — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;


import React from "react";
import styles from "../../styles/hero.module.css"

const LandingPage = () => {
  return (
    <div className={styles["wrapper-div"]}>

   
    <div className={styles.wrapper }>
      {/* Hero Section */}
      

{/* How it Works */}
<section className={styles.how}>
        <h2>How It Works</h2>
        <div className={styles.howGrid}>
          <div className={styles.step}>1. Choose a Quiz</div>
          <div className={styles.step}>2. Answer Questions</div>
          <div className={styles.step}>3. Get Instant Score</div>
          <div className={styles.step}>4. Track Progress</div>
        </div>
      </section>

    
      

      {/* Why Choose Us */}
      <section className={styles.why}>
        <h2>Why Choose Us?</h2>
        <div className={styles.whyGrid}>
          <div className={styles.feature}>Free & Beginner‑Friendly</div>
          <div className={styles.feature}>Regularly Updated Quizzes</div>
          <div className={styles.feature}>Track Your Scores & Progress</div>
          <div className={styles.feature}>Improve Interview Readiness</div>
        </div>
      </section>



      {/* Blog */}
      <section className={styles.blog}>
        <h2>From Our Blog / Resources</h2>
        <div className={styles.blogGrid}>
          <div className={styles.blogCard}>5 Common Mistakes in JavaScript – Tutorial Breakdown</div>
          <div className={styles.blogCard}>Classic CSS Tricks You Should Know in 2024</div>
          <div className={styles.blogCard}>Mini Project Guide – To‑Do App with React</div>
        </div>
      </section>

        {/* Testimonials */}
        <section className={styles.testimonials}>
        <h2>User Testimonials</h2>
        <div className={styles.testimonialGrid}>
          <div className={styles.card}>“Quizzes helped me learn faster! I feel confident in interviews.” - Sarah J.</div>
          <div className={styles.card}>“Best way to keep my HTML & CSS skills sharp. A quiz a day!” - Mike D.</div>
          <div className={styles.card}>“The coding challenges are fun! I've improved massively.” - Evelyn P.</div>
        </div>
      </section>

    </div>
    </div>
  );
};

export default LandingPage;

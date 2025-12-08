import React from "react";
import styles from "../../styles/home/navbar.module.css";
import Logo from "../../../../public/SVG";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
      <div className={styles.logo}> 
  <img src="/image/home/logooo.png" alt="BrainQuiz Logo"className={styles.logoImg} />
  {/* <span>BrainQuiz</span> */}
</div>


        <div className={styles.navLinks}>
          <button className={styles.navBtn}>Home</button>
          <button className={styles.navBtn}>About</button>
          <button className={styles.navBtn}>Contact</button>
          <button className={styles.signupBtn}>Sign Up</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

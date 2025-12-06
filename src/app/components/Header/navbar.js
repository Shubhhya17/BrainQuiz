import React from 'react'
import styles from "../../styles/home/navbar.module.css"
const Navbar = () => {
  return (
  <>
  <div className={styles["main-div"]}>
    <h1>BrainQuiz</h1>
    <div className={styles["hero-div"]}>
        <button> Home</button>
        <button> About </button>
        <button> Contact</button>
        <button> SignUp</button>
    </div>
  </div>
  </>
  )
}

export default Navbar
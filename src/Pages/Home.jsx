/** @format */

import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.firstRow}>International Conference on</div>
      <div className={styles.container}>
        {/* <video
          autoPlay
          muted
          loop
          className={styles.video}>
          <source
            src="/others/home.mp4"
            type="video/mp4"
          />
        </video> */}
        {/* <div className={styles.video}></div> */}
        <div className={styles.thirdRow}>
          <div className={styles.thirdRowLeft}>
            <h2>The Annual Techno-Pharma Conclave</h2>
            <h1>April 6-7, 2024 | IIT (BHU) Varanasi</h1>
          </div>
          <div className={styles.thirdRowRight}>
            <button>Button</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

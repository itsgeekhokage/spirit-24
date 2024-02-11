import React from "react";
import styles from "./Footer.module.css";
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'

const Footer1 = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.leftbox}>
        <div className={styles.lefttitle}>
          <h3>International Conference on</h3>
          <h1>
            PHARMACEUTICAL INNOVATIONS & SPIRIT: <br /> <span>The Annual Techno-Pharma
            Conclave</span>
          </h1>
        </div>
        <div className={styles.socials}>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
        </div>
      </div>
      <div className={styles.rightbox}>
        <h1>Contact Us</h1>
        <div>
          <img src={img1} alt="" />
          <span><a href="mailto:spirit@iitbhu.ac.in">spirit@iitbhu.ac.in</a></span>
        </div>
        <div>
          <img src={img5} alt="" />
          <span>+91 1234567890</span>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
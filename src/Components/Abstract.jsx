import React from "react";
import styles from "./Abstract.module.css";

const Abstract = () => {
  return (
    <>
      <div className={styles.abstract_container}>
        <div className={styles.abstract_container_left}>
          <h3 className={styles.abstract_container_left_heading}>
            Submit your abstract
          </h3>
          <p className={styles.abstract_container_left_text1}>
            We invite abstracts for poster in Pharmacy and related domains
          </p>

          <p className={styles.abstract_container_left_text2}>
            Submission deadline : 15th March 2023
          </p>
        </div>
        <div className={styles.button}>
          <button className={styles.abstract_container_left_button}>
            <h2 className={styles.abstract_container_left_button_text}>
              Submit
            </h2>
          </button>
        </div>
      </div>
    </>
  );
};

export default Abstract;
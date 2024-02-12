/** @format */

import styles from "./Abstract.module.css";

const Abstract = () => {
  return (
    <>
      <div className={styles.abstract_container}>
        <div className={styles.photo}>
          <img src="https://files.catbox.moe/pxs71f.png" alt="" />
        </div>
        <div className={styles.content}>
          <div className={styles.heading}>
            <h3>Submit your abstract:</h3>
          </div>
          <div className={styles.para}>
            <p>
              Submit your abstract: We invite abstracts for poster presentation
              in the pharmaceutical and biotechnology domains!
            </p>
          </div>
        </div>
        <div className={styles.last}>
          <div className={styles.btn}>
            <button>Submit Now!</button>
          </div>
          <div className={styles.deadline}>
            <p>DEADLINE: 15 March&apos;24</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Abstract;

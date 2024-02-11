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

        {/* <div className={styles.abstract_container_left}>
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
        </div> */}
      </div>
    </>
  );
};

export default Abstract;

/** @format */

import styles from "./Speakers.module.css";

const Card = ({ item }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imagecontainer}>
        <img src={item.image} alt="" />
      </div>

      <div className={styles.name}>
        <h3>{item.name}</h3>
      </div>

      <div className={styles.desc}>
        <p>{item.des}</p>
      </div>
      {/* <div className={styles.card_main}>
        <img
          src={item.image}
          alt=""
        />
        <div>
          <h5>{item.name}</h5>
          <div></div>
          <p>{item.des}</p>
        </div>
      </div> */}
    </div>
  );
};

const Speakers = () => {
  let speakers = [
    {
      name: "Dr. Rajeev Raghuvanshi",
      image: "/images/rajeev.png",
      des: "DRUG CONTROLLER GENERAL OF INDIA",
    },
    {
      name: "Dr. Rajeev Raghuvanshi",
      image: "/images/rajeev.png",
      des: "DRUG CONTROLLER GENERAL OF INDIA",
    },
    {
      name: "Dr. Rajeev Raghuvanshi",
      image: "/images/rajeev.png",
      des: "DRUG CONTROLLER GENERAL OF INDIA",
    },
    {
      name: "Dr. Rajeev Raghuvanshi",
      image: "/images/rajeev.png",
      des: "DRUG CONTROLLER GENERAL OF INDIA",
    },
    {
      name: "Dr. Rajeev Raghuvanshi",
      image: "/images/rajeev.png",
      des: "DRUG CONTROLLER GENERAL OF INDIA",
    },
    {
      name: "Dr. Rajeev Raghuvanshi",
      image: "/images/rajeev.png",
      des: "DRUG CONTROLLER GENERAL OF INDIA",
    },
  ];
  return (
    <div className={styles.page}>
      <h1>Keynote Speakers</h1>
      <div className={styles.list}>
        {speakers.map((item, index) => {
          return (
            <div key={index}>
              <Card item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Speakers;

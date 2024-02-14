/** @format */

import styles from "./Speakers.module.css";

const Card = ({ item }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imagecontainer}>
        <img
          src={item.image}
          alt=""
        />
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
      image: "/speakers/rajeev.png",
      des: "DRUG CONTROLLER GENERAL OF INDIA",
    },
    {
      name: "Dr. Dulal Panda",
      image: "/speakers/panda.png",
      des: "Director, NIPER Mohali",
    },
    {
      name: "Dr. Birendra Singh",
      image: "/speakers/birendra.png",
      des: "President - Global Quality Head",
    },
    {
      name: "Dr. Anil Kukreja",
      image: "/speakers/anil.png",
      des: "Vice President - Medical Affairs and Regulatory",
    },
    {
      name: "Dr. Amit Vaish",
      image: "/speakers/amit.png",
      des: "Principal Scientist",
    },
    {
      name: "Dr. Romi Singh",
      image: "/speakers/romi.png",
      des: "Senior Vice President",
    },
    {
      name: "Dr. Anish Chakkumkal",
      image: "/speakers/anish.png",
      des: "Associate Scientific Director",
    },
  ];
  return (
    <div className={styles.page}>
      <h1>Keynote Speakers</h1>
      <div className={styles.list}>
        {speakers.slice(0, 7).map((item, index) => {
          return (
            <Card
              item={item}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Speakers;

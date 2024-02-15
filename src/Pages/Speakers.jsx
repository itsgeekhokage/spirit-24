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
      <div className={styles.info}>
        <img src={item.logo} alt="designation" />
      </div>
    </div>
  );
};
// spirit-24\src\assets\amgen.png
const Speakers = () => {
  let speakers = [
    {
      name: "Dr. Rajeev Raghuvanshi",
      image: "/speakers/rajeev.png",
      des: "DCG OF INDIA",
      logo:"/speakers/dcgi.png"
    },
    {
      name: "Dr. Dulal Panda",
      image: "/speakers/panda.png",
      des: "Director, NIPER Mohali",
      logo:"/speakers/niper.jpg"
    },
    {
      name: "Dr. Birendra Singh",
      image: "/speakers/birendra.png",
      des: "President - Global Quality Head",
      logo:"/speakers/mankind.png"
    },
    {
      name: "Dr. Anil Kukreja",
      image: "/speakers/anil.png",
      des: "Vice President - Medical Affairs and Regulatory",
      logo:"/speakers/astra.png"
    },
    {
      name: "Dr. Amit Vaish",
      image: "/speakers/amit.png",
      des: "Principal Scientist",
      logo:"/speakers/amgen.png"
    },
    {
      name: "Dr. Romi Singh",
      image: "/speakers/romi.png",
      des: "Senior Vice President",
      logo:"/speakers/sun-pharma.png"
    },
    {
      name: "Dr. Anish Chakkumkal",
      image: "/speakers/anish.png",
      des: "Associate Scientific Director",
      logo:"/speakers/janssen.png"
    },
  ];
  return (
    <div className={styles.page} id="speakers">
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

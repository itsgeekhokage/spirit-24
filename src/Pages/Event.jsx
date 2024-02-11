/** @format */
import Abstract from "../Components/Abstract";
import styles from "./Event.module.css";

const Card = ({ item }) => {
  return (
    <div className={styles.card}>
      <div className={styles.gif}>{item.gif}</div>
      <div className={styles.name}>{item.eventName}</div>
      <div className={styles.btn}>
        <button>Register</button>
      </div>
    </div>
  );
};

const Events = () => {
  let eventsDB = [
    {
      eventName: "Poster Presentation",
      gif: "~gif~",
    },
    {
      eventName: "AI Biohackathon",
      gif: "~gif~",
    },
    {
      eventName: "Pharm Innovate Case Study",
      gif: "~gif~",
    },
    {
      eventName: "RxQuest: Quiz",
      gif: "~gif~",
    },
  ];
  return (
    <div className={styles.container}>
      <div>
        <Abstract />
      </div>
      <div className={styles.event}>
        <h1>Events</h1>
        <div className={styles.poster}>
          {eventsDB.map((item, index) => {
            return (
                <Card item={item} key={index} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Events;

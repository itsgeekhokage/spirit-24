/** @format */
import Abstract from "../Components/Abstract";
import styles from "./Event.module.css";

const Card = ({ item }) => {
  return (
    <div className={styles.card}>
      <div className={styles.gif}><img src={item.gif}></img></div>
      <div className={styles.name}>{item.eventName}</div>
      <div className={styles.btn}>
        <button>Register</button>
      </div>
      <div className={styles.style}></div>
    </div>
  );
};

const Events = () => {
  let eventsDB = [
    {
      eventName: "Poster Presentation",
      gif: "/events/poster.png",
    },
    {
      eventName: "AI Biohackathon",
      gif: "/events/aibiohackathon.png",
    },
    {
      eventName: "Pharm Innovate Case Study",
      gif: "/events/case.png",
    },
    {
      eventName: "RxQuest: Quiz",
      gif: "/events/quiz.png",
    },
  ];
  return (
    <div className={styles.container} id="events">
      <div>
        <Abstract />
      </div>
      <div className={styles.event}>
        <h1>Events</h1>
        <div className={styles.poster}>
          {eventsDB.map((item, index) => {
            return (
              <Card
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Events;

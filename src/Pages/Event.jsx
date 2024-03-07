/** @format */
import Abstract from "../Components/Abstract";
import styles from "./Event.module.css";

const Card = ({ item }) => {
  return (
    <div className={styles.card}>
      <div className={styles.gif}><img src={item.gif}></img></div>
      <div className={styles.name}>{item.eventName}</div>
      <div>
        <a href={item.buttonlink} className={styles.btn} style={{textDecoration:"none"}} target="_blank">
          <button>{item.buttontext}</button>
        </a>
      </div>
      <a className={styles.extra} href={item.targetlink} target="_blank">{item.targettext}</a>
      <div className={styles.style}></div>
    </div>
  );
};

const Events = () => {
  let eventsDB = [
    {
      eventName: "Poster Presentation",
      gif: "/events/poster.png",
      buttontext:"Submit Abstract",
      buttonlink:"https://docs.google.com/forms/d/e/1FAIpQLSe0pqvjp54J4QdtnqMqnuDJiJW7KBfkS6Kq6o9x3RCVJl2B-g/viewform",
      targettext:"View Guidelines",
      targetlink:"",
    },
    {
      eventName: "AI Biohackathon",
      gif: "/events/aibiohackathon.png",
      buttontext:"Coming Soon",
      buttonlink:"",
      targettext:"",
      targetlink:"",
    },
    {
      eventName: "Pharm Innovate Case Study",
      gif: "/events/case.png",
      buttontext:"Register",
      buttonlink:"https://forms.gle/peHFswNGD3m6BVcd8",
      targettext:"",
      targetlink:"https://forms.gle/peHFswNGD3m6BVcd8",
    },
    {
      eventName: "RxQuest: Quiz",
      gif: "/events/quiz.png",
      buttontext:"Prelims - 20 Mar",
      buttonlink:"",
      targettext:"Pharmacy India App",
      targetlink:"https://play.google.com/store/apps/details?id=co.april2019.pindia&hl=en_US&pli=1",
    },
    {
      eventName: "Fabrica: Model Making",
      gif: "/events/model.jpg",
      buttontext:"Register",
      buttonlink:"https://docs.google.com/forms/d/e/1FAIpQLScIxhwD3TAbjcgy6QvDfedgKuA0QwvVdy71nKYPoWOWM7s_zA/viewform?usp=sf_link",
      targettext:"",
      targetlink:"",
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

/** @format */

import React from "react";
import styles from "./Speakers.module.css";

const Card = ({ item }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_main}>
        <img
          src={item.image}
          alt=""
        />
        <div>
          <h5>{item.name}</h5>
          <div></div>
          <p>{item.des}</p>
        </div>
      </div>
    </div>
  );
};

const Speakers = () => {
  let speakers = [
    {
      name: "Dr. Rajeev Raghuvanshi",
      image: "/images/rajeev.png",
      des: "DGCI, India",
    },
    {
      name: "Dr. Rajeev Raghuvanshi",
      image: "/images/rajeev.png",
      des: "DGCI, India",
    },
    {
      name: "Dr. Rajeev Raghuvanshi",
      image: "/images/rajeev.png",
      des: "DGCI, India",
    },
    {
      name: "Dr. Rajeev Raghuvanshi",
      image: "/images/rajeev.png",
      des: "DGCI, India",
    },
    {
      name: "Dr. Rajeev Raghuvanshi",
      image: "/images/rajeev.png",
      des: "DGCI, India",
    },
    {
      name: "Dr. Rajeev Raghuvanshi",
      image: "/images/rajeev.png",
      des: "DGCI, India",
    },
  ];
  return (
    <div className={styles.page}>
      <h1>Speakers</h1>
      <div className={styles.list}>
        {speakers.map((item) => {
          return (
            <div>
              <Card item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Speakers;

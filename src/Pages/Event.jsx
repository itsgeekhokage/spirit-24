/** @format */

import React, { useState } from "react";
import Abstract from "../Components/Abstract";
import styles from "./Event.module.css";

const Card = () => {
  let [show, setShow] = useState(false);
  return (
    <div
      className={styles.card}
      style={show ? {} : { borderBottom: "3px solid var(--primaryColor)" }}>
      <div className={styles.heading}>heading</div>
      <div className={styles.icon}>icon</div>
      <div
        className={styles.pointer}
        style={show ? { borderTop: "3px solid var(--primaryColor)" } : {}}>
        <p onClick={() => setShow((pre) => !pre)}>~</p>
        {show && (
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            nihil laudantium voluptatem harum tempore porro placeat dolor unde
            molestiae fuga non, est aliquam assumenda ipsam repellat vitae
            tempora. Quis pariatur expedita magnam perferendis quasi.
          </span>
        )}
      </div>
    </div>
  );
};
const Events = () => {
  return (
    <div className={styles.container}>
      <div>
        <Abstract />
      </div>
      <div className={styles.event}>
        <h1>Events</h1>
        <div className={styles.poster}>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Events;

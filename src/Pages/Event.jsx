import React from 'react'
import Abstract from '../Components/Abstract'
import event from '../assets/event.png'
import styles from './Event.module.css'

const Events = () => {
  return (
    <div className={styles.container}>
        <div>
           <Abstract />
        </div>
        <div className={styles.event}>
            <h1>Events</h1>
            <div className={styles.poster}>
              <div className={styles.image}>
                  <img src={event} alt="" />
                  <h3>Harish Kumar</h3>
              </div>
              <div className={styles.image}>
                  <img src={event} alt="" />
                  <h3>Harish Kumar</h3>
              </div>
              <div className={styles.image}>
                  <img src={event} alt="" />
                  <h3>Harish Kumar</h3>
              </div>
              <div className={styles.image}>
                  <img src={event} alt="" />
                  <h3>Harish Kumar</h3>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Events
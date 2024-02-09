import React from 'react'
import styles from  "./Navbar.module.css"
import logo from "../assets/react.svg"

const Navbar = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.nav}>
                <img src={logo} alt="React Logo" width={50}/>
                <div className={styles.nav_links}>
                    <a href="/">Home</a>
                    <a href="/events">Schedule</a>
                    <a href="/contact">Events</a>
                    <a href="/about">Team</a>
                    <button className={styles.button}>
                        <a href="/login">Register</a>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Navbar;

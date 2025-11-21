"use client";

import { useState, useEffect } from "react";
import styles from "./Filter.module.css";
import data from "@/data/animal.json";

export default function Filter({ filters }) {
  function nextConsult(params) {

  }
  function displayAll(params) {
    
  }
  useEffect(() => {
    const dateNow = new Date();
    const newConsult = [];

    data.forEach((consult) => {
      const consultationsAnimal = consult.consultations;

      consultationsAnimal.forEach((consult) => {
        const dateformatted = new Date(consult.date_visite);

        console.log(dateformatted);

        if (dateformatted > dateNow) {
          console.log("afficher");
          newConsult.push(consult);
          console.log("new consult", newConsult);
        } else {
          console.log("pas afficher");
        }
      });
    });
  }, []);

  const [active, setActive] = useState(filters[0]);

  return (
    <div className={styles.wrapper}>
      {filters.map((item) => (
        <button
          key={item}
          onClick={() => setActive(item)}
          className={`${styles.btn} ${active === item ? styles.active : ""}`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

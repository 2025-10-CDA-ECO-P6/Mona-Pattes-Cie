"use client";

import { useState, useEffect } from "react";
import styles from "./Filter.module.css";
import data from "@/data/animal.json";

export default function Filter({ filters, onFilter }) {
  const [active, setActive] = useState(filters[0]);


  return (
    <div className={styles.wrapper}>
      {filters.map((item) => (
        <button
          key={item}
          onClick={() => {
            setActive(item);
            onFilter(item);
          }}
          className={`${styles.btn} ${active === item ? styles.active : ""}`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

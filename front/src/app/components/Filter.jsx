"use client";

import { useState } from "react";
import styles from "./Filter.module.css";

export default function Filter({ filters }) {
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

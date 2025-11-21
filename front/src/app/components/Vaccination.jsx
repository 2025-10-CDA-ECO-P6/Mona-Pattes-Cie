"use client";
import { useState } from "react";
import styles from "./Vaccination.module.css";

export default function Vaccination({ vaccins = [] }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Vaccins :</h2>

      <ul className={styles.list}>
        {vaccins.map((v) => (
          <VaccinItem key={v.id_vaccination} v={v} />
        ))}
      </ul>
    </div>
  );
}

function VaccinItem({ v }) {
  const [open, setOpen] = useState(false);

  return (
    <li className={styles.item}>
      <div className={styles.row}>
        <span className={styles.date}>{v.date_vaccination} :</span>
        <span className={styles.name}>{v.nom_vaccin}</span>
      </div>

      {open && (
        <div className={styles.details}>
          {v.date_rappel && (
            <div className={styles.rappel}>        
              • Rappel : <strong>{v.date_rappel}</strong>
            </div>
          )}

          {v.commentaire && (
            <div className={styles.comment}>{v.commentaire}</div>
          )}
        </div>
      )}

      <button className={styles.more} onClick={() => setOpen(!open)}>
        {open ? "Voir moins ▲" : "Voir plus ▼"}
      </button>
    </li>
  );
}

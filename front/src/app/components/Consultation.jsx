"use client";
import { useState } from "react";
import styles from "./Consultation.module.css";

export default function Consultation({ consultations = [] }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Consultations :</h2>

      <ul className={styles.list}>
        {consultations.map((c) => (
          <ConsultItem key={c.id_visite} c={c} />
        ))}
      </ul>
    </div>
  );
}

function ConsultItem({ c }) {
  const [open, setOpen] = useState(false);

  return (
    <li className={styles.item}>
      <div className={styles.row}>
        <span className={styles.date}>{c.date_visite} :</span>
        <span className={styles.motif}>{c.motif}</span>
      </div>

      {open && (
        <div className={styles.details}>
          <div>
            <strong>Diagnostic :</strong> {c.diagnostic}
          </div>

          {c.observation && (
            <div className={styles.observation}>
              <strong>Observation :</strong> {c.observation}
            </div>
          )}

          <div>
            <strong>Vétérinaire :</strong> {c.veterinaire}
          </div>
        </div>
      )}

      <button className={styles.more} onClick={() => setOpen(!open)}>
        {open ? "Voir moins ▲" : "Voir plus ▼"}
      </button>
    </li>
  );
}

"use client";
import { useState } from "react";
import styles from "./Treatment.module.css";

export default function Treatment({ traitements = [] }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Traitements :</h2>

      <ul className={styles.list}>
        {traitements.map((t) => (
          <TraitementItem key={t.id_traitement} t={t} />
        ))}
      </ul>
    </div>
  );
}

function TraitementItem({ t }) {
  const [open, setOpen] = useState(false);

  return (
    <li className={styles.item}>
      <div className={styles.row}>
        <span className={styles.date}>
          {t.date_debut} → {t.date_fin}
        </span>
        <br></br>
        <span className={styles.name}>{t.nom_traitement}</span>
      </div>

      {open && (
        <div className={styles.details}>
          <div className={styles.poso}>
            • Posologie : <strong>{t.posologie}</strong>
          </div>

          {t.remarque && (
            <div className={styles.comment}>
              • Remarque : <strong>{t.remarque}</strong>
            </div>
          )}
        </div>
      )}

      <button className={styles.more} onClick={() => setOpen(!open)}>
        {open ? "Voir moins ▲" : "Voir plus ▼"}
      </button>
    </li>
  );
}

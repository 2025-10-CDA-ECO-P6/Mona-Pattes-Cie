import styles from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faWeightScale, faRuler, faPaw } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Card({ animal }) {
  return (
      <Link href={`/animaux/${animal.id}`} className={styles.card}>
      <img src={animal.photo} alt={animal.nom} className={styles.photo} />

      <div className={styles.info}>
        <h3 className={styles.nom}>{animal.nom}</h3>
        <p className={styles.meta}>
          {animal.espece} • {animal.race}
        </p>

        <div className={styles.row}>
          <FontAwesomeIcon icon={faBirthdayCake} className={styles.icon} />
          <span>{animal.age} ans</span>
        </div>

        <div className={styles.row}>
          <FontAwesomeIcon icon={faWeightScale} className={styles.icon} />
          <span>{animal.poids} kg</span>
        </div>


        <div className={styles.row}>
          <FontAwesomeIcon icon={faRuler} className={styles.icon} />
          <span>{animal.taille} cm</span>
        </div>

        <div className={styles.row}>
          <FontAwesomeIcon icon={faPaw} className={styles.icon} />
          <span>N° ICAD : {animal.num_puce}</span>
        </div>

        <button className={styles.btn}>Voir la fiche</button>
      </div>
      </Link>
  );
}

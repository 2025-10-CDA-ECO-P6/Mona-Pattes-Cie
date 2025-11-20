"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <div className={styles.container}>
        <div className={styles.rows}>
             <FontAwesomeIcon icon={faHome} className={styles.icon} />
             <FontAwesomeIcon icon={faSearch} className={styles.icon} />
             <FontAwesomeIcon icon={faSignOutAlt} className={styles.icon} />
        </div>
    </div>
  );
}

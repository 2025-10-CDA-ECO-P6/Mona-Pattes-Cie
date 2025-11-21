"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faSignOutAlt,
  faArrowLeft,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <div className={styles.container}>
      <div className={styles.rows}>
        <Link href="/animaux">
          <FontAwesomeIcon icon={faHome} className={styles.icon} />
        </Link>

        <FontAwesomeIcon icon={faSearch} className={styles.icon} />

        <FontAwesomeIcon icon={faCalendar} className={styles.icon} />

        <FontAwesomeIcon icon={faSignOutAlt} className={styles.icon} />
      </div>
    </div>
  );
}

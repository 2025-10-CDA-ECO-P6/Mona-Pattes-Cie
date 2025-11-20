"use client";

import styles from "./SearchBar.module.css";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (onSearch) onSearch(query);
  }

  return (
    <form className={styles.searchBar} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />

        <input
          type="search"
          placeholder="Rechercher un animal..."
          className={styles.searchInput}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <Button type="submit">Rechercher</Button>
    </form>
  );
}

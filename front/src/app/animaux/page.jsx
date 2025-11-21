import Card from "../components/Card";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import data from "@/data/animal.json";

export default async function AnimauxPage() {

  return (
    <>
      <div className={styles.welcome}>
        <div className={styles.welcomeCard}>
          <div className={styles.left}>
            <h1 className={styles.title}>Bienvenue dans le Carnet de Santé</h1>
            <p className={styles.subtitle}>
              Retrouvez ici tous les dossiers complets et mis à jour de vos
              animaux.
            </p>
          </div>

          <div className={styles.right}>
            <div className={styles.bubble}>
              <FontAwesomeIcon icon={faPaw} className={styles.bubbleIcon} />
            </div>
          </div>
        </div>
      </div>
      <SearchBar />

      <Filter
        filters={["Liste", "Prochaine consultation", "Vaccin à venir"]}
      />


      {/* affichage json en brut DEBUUG */}
      {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
      <div className={styles.container}>
        <div className={styles.grid}>
          {[...data].map(
            (animal, index) => (
              <Card key={animal.id} animal={animal} />
            )
          )}
        </div>
      </div>
    </>
  );
}

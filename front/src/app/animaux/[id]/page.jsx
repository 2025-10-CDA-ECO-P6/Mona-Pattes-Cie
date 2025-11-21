import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBirthdayCake,
  faWeightScale,
  faRuler,
  faPaw,
} from "@fortawesome/free-solid-svg-icons";
import Vaccination from "@/app/components/Vaccination";

export default async function AnimalPage({ params }) {
  const { id } = await params;

  let data = await fetch("http://localhost:3000/data/animal.json");
  let posts = await data.json();

  const animal = posts.find((animal) => String(animal.id) === String(id));

  if (!animal) {
    return <div>Animal introuvable</div>;
  }

  return (
    <>
      <div className={styles.animal}>
        <div className={styles.animalCard}>
          <div className={styles.left}>
            <p className={styles.info}>
              <span className={styles.name}>{animal.nom}</span>
              <span className={styles.dot}> • </span>
              <span className={styles.species}>{animal.espece}</span>
              <span className={styles.dot}> • </span>
              <span className={styles.breed}>{animal.race}</span>
            </p>
            <br></br>
            <div className={styles.carac}>
              <div className={styles.row}>
                <FontAwesomeIcon
                  icon={faBirthdayCake}
                  className={styles.icon}
                />
                <span>
                  {animal.date_naissance} - {animal.age} ans
                </span>
              </div>

              <div className={styles.row}>
                <FontAwesomeIcon icon={faWeightScale} className={styles.icon} />
                <span>{animal.poids} kg</span>
              </div>

              <div className={styles.row}>
                <FontAwesomeIcon icon={faRuler} className={styles.icon} />
                <span>{animal.taille} cm</span>
              </div>

              <div className={styles.proprio}>
                <span className={styles.label}>Propriétaire : </span>
                <span className={styles.value}>{animal.proprietaire}</span>
              </div>

              <div className={styles.row}>
                <FontAwesomeIcon icon={faPaw} className={styles.icon} />
                <span>
                  <span className={styles.label}>N° ICAD :</span>
                  <span className={styles.value}> {animal.num_puce}</span>
                </span>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.bubble}>
              <img
                src={animal.photo}
                alt={animal.nom}
                className={styles.photo}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.detailsSection}>
        <Vaccination vaccins={animal.vaccinations} />
        <Vaccination vaccins={animal.vaccinations} />
        <Vaccination vaccins={animal.vaccinations} />
      </div>
    </>
  );
}

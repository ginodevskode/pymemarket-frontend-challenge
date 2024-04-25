/* eslint-disable react/prop-types */
import styles from "./repositoryCard.module.css";

export const RepositoryCard = ({ repositoryName, repositoryDescription }) => {
  if (repositoryDescription === null) {
    repositoryDescription = "This repository doesn't have a description";
  }
  return (
    <div className={styles.container}>
      <p className={styles.name}>{repositoryName}</p>
      <p className={styles.repoDescription}>{repositoryDescription}</p>
    </div>
  );
};

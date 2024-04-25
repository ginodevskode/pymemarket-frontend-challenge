/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";

export const RepositoryCard = ({
  repositoryName,
  repositoryDescription,
  userName,
}) => {
  const navigate = useNavigate();
  if (repositoryDescription === null) {
    repositoryDescription = "This repository doesn't have a description";
  }
  return (
    <div
      className={styles.container}
      onClick={() => navigate(`/${userName}/${repositoryName}/contents`)}
    >
      <p className={styles.name}>{repositoryName}</p>
      <p className={styles.repoDescription}>{repositoryDescription}</p>
    </div>
  );
};

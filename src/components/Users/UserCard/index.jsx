import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";

export const UserCard = ({ username, avatar, id }) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.container}
      onClick={() => navigate(`${username}/repositories`)}
    >
      <div className={styles.imageContainer}>
        <img src={avatar} className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.id}>{`ID: ${id}`}</p>
        <p className={styles.userName}>{`Username: ${username}`}</p>
      </div>
    </div>
  );
};

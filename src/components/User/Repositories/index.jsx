import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getUserRepositories } from "src/redux/usersSlice";
import styles from "./style.module.css";
import { RepositoryCard } from "./RepositoryCard";

const Repositories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user: userName } = useParams();
  const currentUserRepos = useSelector(
    (state) => state.users.currentUserRepositories
  );

  useEffect(() => {
    dispatch(getUserRepositories(userName));
  }, []);

  return (
    <div className={styles.reposSection}>
      <div className={styles.titleContainer}>
        <i
          className={`material-icons ${styles.icon}`}
          onClick={() => navigate(-1)}
        >
          arrow_back
        </i>
        <h2 className={styles.title}>Repositories</h2>
      </div>
      <div className={styles.reposContainer}>
        {currentUserRepos.map((repositoryItem) => {
          return (
            <RepositoryCard
              userName={userName}
              repositoryName={repositoryItem.name}
              repositoryDescription={repositoryItem.description}
              key={repositoryItem.name}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Repositories;

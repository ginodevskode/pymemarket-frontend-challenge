/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { getRepository } from "src/redux/usersSlice";
import styles from "./style.module.css";
import Folder from "./Folder";
import File from "./File";

const Repository = () => {
  const { user, repository } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const currentPathSegments = currentPath.split("/");
  const lastFolderName = currentPathSegments[currentPathSegments.length - 1];

  const currentRepositoryContent = useSelector(
    (state) => state.users.currentRepositoryContent
  );

  useEffect(() => {
    if (currentPath) {
      dispatch(getRepository({ user, repository }));
    }
  }, [dispatch]);

  return (
    <div className={styles.reposSection}>
      <div className={styles.titleContainer}>
        <i
          className={`material-icons ${styles.icon}`}
          onClick={() => navigate(-1)}
        >
          arrow_back
        </i>
        <h2 className={styles.title}>{lastFolderName}</h2>
      </div>
      {currentRepositoryContent.length > 0 ? <Folder /> : <File />}
    </div>
  );
};

export default Repository;

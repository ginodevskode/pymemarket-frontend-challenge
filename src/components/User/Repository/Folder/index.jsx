/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getRepositoryContent } from "src/redux/usersSlice";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Folder = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  const currentRepositoryContent = useSelector(
    (state) => state.users.currentRepositoryContent
  );

  useEffect(() => {
    if (currentPath) {
      dispatch(getRepositoryContent(currentPath));
    }
  }, [currentPath, dispatch]);

  return (
    <div className={styles.reposContainer}>
      {currentRepositoryContent?.map((item) => {
        return (
          <div
            onClick={() => navigate(`${currentPath}/${item.name}`)}
            className={styles.itemContainer}
            key={item.name}
          >
            <i className={`material-icons ${styles.icon}`}>
              {item.type === "dir" ? "folder" : "insert_drive_file"}
            </i>
            <p key={item.name} className={styles.item}>
              {item.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Folder;

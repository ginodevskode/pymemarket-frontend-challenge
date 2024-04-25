import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRepositoryContent } from "src/redux/usersSlice";
import { useLocation } from "react-router-dom";
import styles from "./style.module.css";

const File = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const currentPath = location.pathname;
  const currentRepositoryContent = useSelector(
    (state) => state.users.currentRepositoryContent
  );

  useEffect(() => {
    if (currentPath) {
      dispatch(getRepositoryContent(currentPath));
    }
  }, [currentPath, dispatch]);

  function decoder(encodedString) {
    if (!encodedString) {
      return null;
    }
    return atob(encodedString);
  }

  return (
    <div className={styles.reposContainer}>
      <pre>
        <code>{decoder(currentRepositoryContent?.content)}</code>
      </pre>
    </div>
  );
};

export default File;

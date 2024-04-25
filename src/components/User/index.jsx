import styles from "./style.module.css";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getUser } from "src/redux/usersSlice";

const User = () => {
  const { user } = useParams();
  const currentUser = useSelector((state) => state.users.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(user));
  }, [user]);

  return (
    <div className={styles.container}>
      <div className={styles.userSection}>
        <img className={styles.image} src={currentUser.avatar_url}></img>
        <p className={styles.full_name}>{currentUser.name}</p>
        <p className={styles.login}>@{currentUser.login}</p>
      </div>
      <Outlet />
    </div>
  );
};
export default User;

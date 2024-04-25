import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "src/redux/usersSlice";
import { UserCard } from "./UserCard";
import styles from "./style.module.css";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Github Users</h1>
      <div className={styles.container}>
        {users?.map((user) => {
          return (
            <UserCard
              username={user.login}
              avatar={user.avatar_url}
              id={user.id}
              key={user.login}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Users;

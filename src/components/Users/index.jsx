import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "src/redux/usersSlice";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      {users?.map((user) => {
        return <div key={user.id}>{user.login}</div>;
      })}
    </div>
  );
};
export default Users;

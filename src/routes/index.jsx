import { Route, Routes } from "react-router-dom";
import Users from "components/Users";
import User from "src/components/User";
import Repositories from "src/components/User/Repositories";
import Repository from "src/components/User/Repository";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route index element={<Users />} />
      <Route exact path="/users" element={<Users />} />
      <Route path="/:user" element={<User />}>
        <Route path="repositories" element={<Repositories />} />
        <Route path="/:user/:repository/contents/*" element={<Repository />} />
      </Route>
    </Routes>
  );
};
export default RoutesConfig;

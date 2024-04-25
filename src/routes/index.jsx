import { Route, Routes } from "react-router-dom";
import Users from "components/Users";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route index element={<Users />} />
      <Route exact path="/users" element={<Users />} />
    </Routes>
  );
};
export default RoutesConfig;

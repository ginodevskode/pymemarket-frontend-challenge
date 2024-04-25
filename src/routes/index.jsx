import { Route, Routes } from "react-router-dom";
import Users from "components/Users";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Users />} />
    </Routes>
  );
};
export default RoutesConfig;

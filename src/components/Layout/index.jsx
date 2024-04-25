import styles from "./style.module.css";
import RoutesConfig from "src/routes";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className={styles.header}>
        <div className={styles.textContainer} onClick={() => navigate("/")}>
          <h3 className={styles.codingChallenge}>Coding Challenge</h3>
          <h3 className={styles.heading}>Github Navigating</h3>
        </div>
        <h1 className={styles.title}>PymeMarket</h1>
      </header>
      <main className={styles.app}>
        <RoutesConfig />
      </main>
    </>
  );
};
export default Layout;

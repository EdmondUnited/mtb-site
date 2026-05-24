import { Link, Outlet } from "react-router-dom";
import styles from "./ProgramLayout.module.css";

function ProgramLayout() {
  return (
    <main className={styles.page}>
      <div>
        <Link to="/#nicaprograms" className={styles.backLink}>
          Back to NICA Programs
        </Link>
        <Outlet />
      </div>
    </main>
  );
}

export default ProgramLayout;

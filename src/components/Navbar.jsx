import styles from "./navbar.module.css";
import Search from "./Search";

export default function Navbar({ foodData, setFoodData }) {
  return (
    <div className={styles.nav}>
      <span className={styles.text}>Recipe App</span>
      <Search foodData={foodData} setFoodData={setFoodData} />
    </div>
  );
}

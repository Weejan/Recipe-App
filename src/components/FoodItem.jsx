import img from "./img.jpeg";
import styles from "./fooditem.module.css";
export default function FoodItem({ food }) {
  return (
    <div className={styles.foodContainer}>
      <img
        className={styles.foodImg}
        src={food.recipe.image}
        alt={food.recipe.label}
      />
      <div className={styles.foodContent}>
        <p className={styles.foodName}>{food.recipe.label}</p>
      </div>

      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            console.log(food.recipe.label);
          }}
          className={styles.itemButton}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}

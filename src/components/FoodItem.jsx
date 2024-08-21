import styles from "./fooditem.module.css";
export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.foodContainer}>
      <img className={styles.foodImg} src={food.image} alt={food.title} />
      <div className={styles.foodContent}>
        <p className={styles.foodName}>{food.title}</p>
      </div>

      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            setFoodId(food.id);
          }}
          className={styles.itemButton}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}

import FoodItem from "./FoodItem";
import styles from "./foodlist.module.css";
export default function FoodList({
  foodData,
  setFoodData,
  setFoodId,
  apiLoading,
}) {
  return (
    <div className={styles.listContainer}>
      {apiLoading ? (
        <h1>Loading...</h1>
      ) : (
        foodData.map((food) => (
          <FoodItem key={food.id} food={food} setFoodId={setFoodId} />
        ))
      )}
    </div>
  );
}

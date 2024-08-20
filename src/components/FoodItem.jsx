import img from "./img.jpeg";
import styles from "./fooditem.module.css";
export default function FoodItem({ food }) {
  console.log(food);
  return (
    <div className={styles.foodContainer}>
      {/* <img className={styles.foodImg} src={img} alt="{food.title} " />
      <h1>This is testtttt</h1>
      <button>View Recipe</button> */}
      <img src={food.recipe.image} alt={food.recipe.label} />

      <h1>{food.recipe.label}</h1>
      <button>View Recipe</button>
    </div>
  );
}

import { useEffect, useState } from "react";
import styles from "./foodrecipe.module.css";
import IngredientList from "./IngredientList";
export default function FoodRecipe({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "4c376e6ff7f742dda647c23d18a5fa88";

  {
    useEffect(() => {
      async function fetchRecipe() {
        const res = await fetch(`${URL}?apiKey=${API_KEY}`);
        const data = await res.json();
        console.log(data);
        setFood(data);
        setIsLoading(false);
      }
      fetchRecipe();
    }, [foodId]);
  }

  return (
    <div className={styles.recipeCard}>
      <div>
        <h1 className={styles.foodName}>{food.title}</h1>
        <img src={food.image} alt={food.title} />
      </div>
      <div className={styles.basicInfo}>
        <span>
          <strong>Preaparation time: {food.readyInMinutes} Minutes</strong>
        </span>
        <span>
          <strong>Serves: {food.servings} people</strong>
        </span>
        <span>
          <strong>{food.vegetarian ? "Vegetarian" : "Non-Vegetarian"}</strong>
        </span>
      </div>
      <div className={styles.servings}>
        <span>
          <strong>Price per serving: ${food.pricePerServing / 100}</strong>
        </span>
      </div>

      <div className={styles.ingredients}>
        <h2>Ingredients</h2>
        {isLoading ? <p>Loading...</p> : <IngredientList food={food} />}
      </div>
      <div className={styles.instructions}>
        <h2>Instructions</h2>
        <ol>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step) => {
              return <li>{step.step}</li>;
            })
          )}
        </ol>
      </div>
    </div>
  );
}

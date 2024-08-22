import Ingredients from "./Ingredients";

export default function IngredientList({ food }) {
  return food.extendedIngredients.map((item) => {
    return <Ingredients key={item.id} item={item} />;
  });
}

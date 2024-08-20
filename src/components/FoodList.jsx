import FoodItem from "./FoodItem";

export default function FoodList({ foodData, setFoodData }) {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem key={food.recipe.label} food={food} />
      ))}
    </div>
  );
}

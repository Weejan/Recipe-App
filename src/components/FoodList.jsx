import FoodItem from "./FoodItem";

export default function FoodList({ foodData, setFoodData }) {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem key={food.title} food={food} />
      ))}
    </div>
  );
}

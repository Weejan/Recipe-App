import FoodItem from "./FoodItem";

export default function FoodList({
  foodData,
  setFoodData,
  setFoodId,
  apiLoading,
}) {
  return (
    <div>
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

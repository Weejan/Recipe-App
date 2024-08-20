export default function FoodList({ foodData, setFoodData }) {
  return (
    <div>
      {foodData.map((food) => (
        <h1>{food.title}</h1>
      ))}
    </div>
  );
}

import FoodItem from "./FoodItem";

export default function FoodList({ foodData, setFoodData }) {
  return (
    <div>
      <FoodItem food={foodData} />
      {/* {foodData.map((food) => {
        <FoodItem food={food} />;
      })} */}
    </div>
  );
}

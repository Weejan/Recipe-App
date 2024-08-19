import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <>
      <Search foodData={foodData} setFoodData={setFoodData} />
      <FoodList foodData={foodData} setFoodData={setFoodData} />
    </>
  );
}

export default App;

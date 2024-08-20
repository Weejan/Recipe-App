import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import NavBar from "./components/Navbar";
import "./app.css";

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <>
      <NavBar foodData={foodData} setFoodData={setFoodData} />
      <FoodList foodData={foodData} setFoodData={setFoodData} />
    </>
  );
}

export default App;

import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import NavBar from "./components/Navbar";
import "./app.css";
import Container from "./components/Container";
import FoodDetail from "./components/FoodRecipe";
import FoodRecipe from "./components/FoodRecipe";
import InnerContainer from "./components/InnerContainer";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("");
  return (
    <>
      <NavBar foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodData={setFoodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodRecipe />
        </InnerContainer>
      </Container>
    </>
  );
}

export default App;

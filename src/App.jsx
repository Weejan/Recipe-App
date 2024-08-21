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
  const [foodId, setFoodId] = useState("680975");
  const [apiLoading, setApiLoading] = useState(true);
  return (
    <>
      <NavBar
        foodData={foodData}
        setFoodData={setFoodData}
        setApiLoading={setApiLoading}
      />
      <Container>
        <InnerContainer>
          <FoodList
            foodData={foodData}
            setFoodData={setFoodData}
            setFoodId={setFoodId}
            apiLoading={apiLoading}
          />
        </InnerContainer>
        <InnerContainer>
          <FoodRecipe foodId={foodId} />
        </InnerContainer>
      </Container>
    </>
  );
}

export default App;

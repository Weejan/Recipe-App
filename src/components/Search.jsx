import { useEffect, useState } from "react";
import styles from "./search.module.css";

export default function Search({ foodData, setFoodData, setApiLoading }) {
  const [search, updateSearch] = useState("pizza");

  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  const API_KEY = "4c376e6ff7f742dda647c23d18a5fa88";

  // `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=5c0d7e75&app_key=4d34432d1791dd64ede8e87dec23b59a`
  useEffect(() => {
    async function fetchAPI() {
      const res = await fetch(`${URL}?query=${search}&apiKey=${API_KEY}`);
      const data = await res.json();
      setFoodData(data.results);
      setApiLoading(false);
    }
    fetchAPI();
  }, [search]);

  return (
    <div>
      <input
        className={styles.searchBar}
        type="text"
        value={search}
        placeholder="   Search..."
        onChange={(e) => {
          updateSearch(e.target.value);
        }}
      ></input>
    </div>
  );
}

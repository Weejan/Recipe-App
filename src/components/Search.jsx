import { useEffect, useState } from "react";
import styles from "./search.module.css";

export default function Search({ foodData, setFoodData }) {
  const [search, updateSearch] = useState("pizza");
  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  const API_KEY = "4c376e6ff7f742dda647c23d18a5fa88";

  useEffect(() => {
    async function fetchAPI() {
      const res = await fetch(`${URL}?query=${search}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
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

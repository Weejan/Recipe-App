import styles from "./ingredients.module.css";
export default function Ingredients({ item }) {
  return (
    <div key={item.name} style={styles.itemContainer}>
      <div className={styles.imgContainer}>
        <img
          src={`https://spoonacular.com/cdn/ingredients_100x100/` + item.image}
        ></img>
      </div>
      <div className={styls.details}>
        <h3>
          name:{item.nameClean}
          amount:{item.amount} {item.unit}
        </h3>
      </div>
    </div>
  );
}

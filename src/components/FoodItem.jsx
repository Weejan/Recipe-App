import img from "./img.jpeg";
export default function FoodItem({ food }) {
  return (
    <div>
      <img src={img} height={300} width={250} alt="{food.title} " />
      <h1>This is testtttt</h1>
      <button>View Recipe</button>
      {/* <img src={food.image} alt={food.title} />
      <h1>{food.title}</h1>
      <button>View Recipe</button> */}
    </div>
  );
}

import { recipes } from "../data/recipes";
import { RecipeCard } from "../components/RecipeCard";
// TODO Task 2: give each card a key.
// TODO Task 5: load the heavy ReviewPanel with next/dynamic, with a loading message.
export default function Home() {
  return (
    <main>
      <h1>Recipe Notes</h1>
      <div className="grid">
        {recipes.map((recipe) => (
          <RecipeCard recipe={recipe} />
        ))}
      </div>
    </main>
  );
}

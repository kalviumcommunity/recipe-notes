// TODO Task 2: type the prop so that it accepts a recipe (use the Recipe type from data/recipes.ts).
// TODO Task 4: show the image above the title using next/image, with width and height.
export function RecipeCard({ recipe }: any) {
  return (
    <article className="card">
      <img src={`/${recipe.id}.png`} alt={recipe.title} width={300} height={200} />
      <h2>{recipe.title}</h2>
      <p>{recipe.minutes} min</p>
    </article>
  );
}

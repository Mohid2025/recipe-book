import RecipeCard from '../components/RecipeCard'
import { recipes } from '../data/recipes'

const Recipes = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 to-purple-700 min-h-screen py-20">
      <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-16">
        <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
          Our Recipes
        </span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 px-10 place-items-center">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            name={recipe.name}
            image={recipe.image}
            ingredients={recipe.ingredients}
          />
        ))}
      </div>
    </div>
  )
}

export default Recipes

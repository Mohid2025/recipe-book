import { useParams } from 'react-router-dom'
import { recipes } from '../data/recipes'

const RecipeDetails = () => {
  const { id } = useParams()
  const recipe = recipes.find((r) => r.id === id)

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-3xl font-bold">Recipe not found</h2>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-r from-yellow-400 to-purple-700 min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="rounded-lg mb-6 w-full h-80 object-cover"
        />

        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          {recipe.name}
        </h1>

        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default RecipeDetails

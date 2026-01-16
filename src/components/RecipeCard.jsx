import { Link } from 'react-router-dom'

export default function RecipeCard({ id, image, name, ingredients }) {
  return (

    <div className="w-80 h-[500px] flex flex-col overflow-hidden rounded-xl bg-gray-900 shadow-lg border border-gray-300 hover:scale-105 transition-transform duration-300">

      <img
        className="h-48 w-full object-cover flex-shrink-0"
        src={image}
        alt={name}
      />

      <div className="p-6 flex flex-col flex-1">
        <h2 className="text-2xl font-bold text-yellow-500 mb-2 leading-tight">
          {name}
        </h2>

        <p className="text-sm font-semibold uppercase tracking-wider text-yellow-200 mb-2">
          Ingredients
        </p>

        <ul className="list-disc list-inside space-y-2 text-white overflow-y-auto flex-1">
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <Link
          to={`/recipes/${id}`}
          className="mt-4 text-center bg-gradient-to-r from-yellow-400 to-purple-600 text-black font-semibold py-2 rounded-lg hover:opacity-90 transition"
        >
          Full Instructions
        </Link>
      </div>
    </div>
  )
}

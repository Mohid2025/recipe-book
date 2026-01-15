export default function Cards({ image, name, ingredients }) {
  return (
    // Set fixed width (w-80) and fixed height (h-[500px])
    <div className="w-80 h-[500px] flex flex-col overflow-hidden rounded-xl bg-gray-900 shadow-lg border border-gray-300 hover:scale-105 transition-transform duration-300">
      {/* Fixed height for image area */}
      <img className="h-48 w-full object-cover flex-shrink-0" src={image} alt={name} />
      
      {/* flex-1 makes the content area grow to fill the remaining 500px */}
      <div className="p-6 flex flex-col flex-1">
        <h2 className="text-2xl font-bold text-yellow-500 mb-2 leading-tight">{name}</h2>
        
        <p className="text-sm font-semibold uppercase tracking-wider text-yellow-200 mb-2">Ingredients</p>
        
        {/* overflow-y-auto allows scrolling if the list is too long for the fixed height */}
        <ul className="list-disc list-inside space-y-2 text-white overflow-y-auto">
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

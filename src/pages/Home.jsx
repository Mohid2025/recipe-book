import React from 'react'
import Cards from '../components/Cards'

import moltenlava from '../assets/moltenlava.png'
import Chefspecialpasta from '../assets/Chefspecialpasta.png'
import ceasarsalad from '../assets/ceasarsalad.png'
import margheritapizza from '../assets/margeritapizza.png'

const Home = () => {
  return (
    <>
    
        <div className="mt-10 w-72 mx-auto rounded-xl p-6 shadow-lg bg-gradient-to-r from-gray-700 to-gray-900">
            <h1 className="text-3xl font-style: italic font-bold text-white text-center">
                Chef's Specials
            </h1>
        </div>

         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 p-10 min-h-screen place-items-center content-center">
      <Cards 
        name="Chef's Special Pasta"
        image={Chefspecialpasta}
        ingredients={["Penne", "Garlic", "Parmesan", "Basil"]} 
      />

      <Cards 
        name="Classic Caesar Salad"
        image={ceasarsalad}
        ingredients={["Romaine", "Croutons", "Caesar Dressing"]} 
      />

      <Cards
        name="Margherita Pizza"
        image={margheritapizza}
        ingredients={["Tomato Sauce", "Mozzarella", "Fresh Basil"]} 
      />

      <Cards 
        name="Chocolate Lava Cake"
        image={moltenlava}
        ingredients={["Dark Chocolate", "Butter", "Sugar", "Eggs", "Flour"]} 
      />
      </div>
       

    </>
  )
}

export default Home

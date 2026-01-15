import React from 'react'
import Cards from '../components/Cards'

import moltenlava from '../assets/moltenlava.png'
import Chefspecialpasta from '../assets/Chefspecialpasta.png'
import ceasarsalad from '../assets/ceasarsalad.png'
import margheritapizza from '../assets/margeritapizza.png'
import aboutus from '../assets/aboutus.png'

const Home = () => {
  return (
<>

<div className='bg-gradient-to-r from-yellow-400 to-purple-700 pt-6'>

    <div className='pb-20'>
        <h1 className="text-5xl md:text-7xl font-extrabold text-center mt-20">
            <span className="bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
                Tradition meets the unexpected
            </span>
            <br />
            <span className="text-gray-900">on every plate.</span>
        </h1>
    </div>

    <section className="py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
           <h2 className="text-4xl font-bold mb-4">Crafting Memories Since 1998</h2>
           <p className="text-gray-600">At the heart of our kitchen lies a rebellious spirit. We take the time-honored recipes passed down through generations and view them through a modern lens. From hand-rolled pastas infused with unexpected botanicals to wood-fired pizzas topped with seasonal local treasures, we believe that food should be a conversation between the past and the future.</p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
           <img src={aboutus} alt="Our Kitchen" className="rounded-lg shadow-xl" />
        </div>
      </div>
    </section>

        <div className="w-72 mx-auto rounded-xl p-6 shadow-lg bg-gradient-to-r from-gray-700 to-gray-900">
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
       
    </div>
    </>
  )
}

export default Home

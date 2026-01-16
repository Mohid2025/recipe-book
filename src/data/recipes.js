import moltenlava from '../assets/moltenlava.png'
import Chefspecialpasta from '../assets/Chefspecialpasta.png'
import ceasarsalad from '../assets/ceasarsalad.png'
import margheritapizza from '../assets/margeritapizza.png'

export const recipes = [
  {
    id: 'chefs-special-pasta',
    name: "Chef's Special Pasta",
    image: Chefspecialpasta,
    ingredients: ['Penne', 'Garlic', 'Parmesan', 'Basil'],
    instructions: [
      'Boil penne pasta in salted water until al dente.',
      'Sauté garlic in olive oil until fragrant.',
      'Add cooked pasta and toss well.',
      'Finish with parmesan and fresh basil.',
    ],
  },
  {
    id: 'caesar-salad',
    name: 'Classic Caesar Salad',
    image: ceasarsalad,
    ingredients: ['Romaine', 'Croutons', 'Caesar Dressing'],
    instructions: [
      'Wash and chop romaine lettuce.',
      'Add croutons and dressing.',
      'Toss gently until evenly coated.',
      'Serve chilled.',
    ],
  },
  {
    id: 'margherita-pizza',
    name: 'Margherita Pizza',
    image: margheritapizza,
    ingredients: ['Tomato Sauce', 'Mozzarella', 'Fresh Basil'],
    instructions: [
      'Preheat oven to 250°C.',
      'Spread sauce on pizza dough.',
      'Add mozzarella evenly.',
      'Bake for 8–10 minutes and garnish with basil.',
    ],
  },
  {
    id: 'lava-cake',
    name: 'Chocolate Lava Cake',
    image: moltenlava,
    ingredients: ['Dark Chocolate', 'Butter', 'Sugar', 'Eggs', 'Flour'],
    instructions: [
      'Melt chocolate and butter together.',
      'Whisk eggs and sugar until fluffy.',
      'Fold in chocolate mixture and flour.',
      'Bake at 200°C for 8 minutes.',
    ],
  },
]

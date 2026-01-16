import { HashRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Recipies from './pages/Recipies'
import RecipeDetails from './pages/RecipeDetails'
import Footer from './components/Footer'

function App() {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipies />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>

      <Footer />
    </HashRouter>
  )
}

export default App

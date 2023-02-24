import React from "react"
import Header from "./components/Header"
import {Routes, Route} from 'react-router-dom'
import Home from "./components/Home";
import AddRecipe from "./components/Add.js";
import Recipes from "./components/recipes/Recipes"
import Creator from "./components/Creator";
function App() {
  return <React.Fragment>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/add" element={<AddRecipe/>} exact />
        <Route path="/recipes" element={<Recipes/>} exact />
        <Route path="/creator" element={<Creator/>} exact />

      </Routes>
    </main>
  </React.Fragment>
}

export default App;

import React, {useEffect, useState } from 'react';
import axios from 'axios';
import Recipe from './Recipe'
import "./Recipe.css"

// URL containing the address of the landing where all the recipes are
const URL = "http://localhost:5001/recipes";

const fetchHandler = async() => {
    return await axios.get(URL).then((res)=> res.data) 
}

const Recipes = () => {
    const [recipes, setRecipes] = useState();
    useEffect(() => {
        fetchHandler().then((data)=>setRecipes(data));
    }, []);
    console.log(recipes);
    return (
    <div>
        <ul list-style-type="none">
            {recipes && 
            recipes.recipes.map((recipe, i)=>(
                <li className="recipe" key={i}>
                    <Recipe recipe={recipe}/>
                </li>
            ))}
        </ul>
    </div>
    );
}

export default Recipes;
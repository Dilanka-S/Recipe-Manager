import React, {useEffect, useState } from 'react';
import axios from 'axios';
import Recipe from './Recipe'
import "./Recipe.css"

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
        <ul>
            {recipes && 
            recipes.recipes.map((recipe, i)=>(
                <div className="book" key={i}>
                    <Recipe recipe={recipe}/>
                </div>
            ))}
        </ul>
    </div>
    );
}

export default Recipes;
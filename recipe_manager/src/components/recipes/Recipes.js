import React, {useEffect, useState } from 'react';
import axios from 'axios';

const URL = "http://localhost:5001/recipes";
const fetchHandler = async() => {
    return await axios.get(URL).then((res)=> res.data) 
}
const Recipes = () => {
    const [recipes, setRecipes] = useState()
    useEffect(() => {
        fetchHandler().then(data=>setRecipes(data))
    },);
    console.log(recipes);
  return <div>
    All the recipes you can ever want!
    </div>
  
}

export default Recipes
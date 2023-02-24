import { Button } from '@mui/material';
import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import "./Recipe.css"

const Recipe = (props) => {
    const{recipeId, name, ingredients, description, recipeCover} = props.recipe;

  return <div>
    <img src = {recipeCover} alt={name}/>
    <article>Recipe ID: {recipeId}</article>
    <h3>{name}</h3>
    <p>{ingredients}</p>
    <p>{description}</p>
    <Button>Edit</Button>
    <Button>Delete</Button>
    </div>
  
}

export default Recipe;
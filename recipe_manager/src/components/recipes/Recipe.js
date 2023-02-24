import { Button } from '@mui/material';
import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import "./Recipe.css"
import axios from 'axios';

const Recipe = (props) => {
    const history = useNavigate();
    const{_id, recipeId, name, ingredients, description, recipeCover} = props.recipe;
    const deleteHandler = async () => {
        await axios
          .delete(`http://localhost:5001/recipes/${_id}`)
          .then((res) => res.data)
          .then(() => history("/"))
          .then(() => history("/recipes"));
    };

  return ( 
    <div className='card '>
    <img src = {recipeCover} alt={name}/>
    <article>Recipe ID: {recipeId}</article>
    <h3>{name}</h3>
    <p>{ingredients}</p>
    <p>{description}</p>
    <Button sx={{mt:'auto'}}>Edit</Button>
    <Button sx={{mt:'auto'}}>Delete</Button>
    </div>
  );
};

export default Recipe;
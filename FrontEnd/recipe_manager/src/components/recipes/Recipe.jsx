import { Button } from '@mui/material';
import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import "./Recipe.css"
import axios from 'axios';

const Recipe = (props) => {
    const history = useNavigate();
    const{_id, recipeId, name, ingredients, description, image} = props.recipe;
    const deleteHandler = async () => {
        await axios
          .delete(`http://localhost:5001/recipes/${_id}`)
          .then((res) => res.data)
          .then(() => history("/"))
          .then(()=>history("/"))
          .then(() => history("/recipes"));
        
    };
// Card component to configure the output of each list item to be displayed
  return ( 
    <div className='card'>
    <img src = {image} alt={name}/>
    <article>Recipe ID: {recipeId}</article>
    <h2>{name}</h2>
    <p>{ingredients}</p>
    <p>{description}</p>
    <Button 
    sx={{mt:'auto'}}
    LinkComponent={Link} to={`/recipes/${_id}`}>
        Edit
    </Button>
    <Button
    sx={{mt:'auto'}}
    color="error"
    onClick={deleteHandler}>
        Delete
    </Button>
    </div>
  );
};

export default Recipe;
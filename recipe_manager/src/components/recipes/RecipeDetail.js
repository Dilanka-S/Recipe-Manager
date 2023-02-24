
import { Box, Button, FormLabel, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

// To display the details of each recipe after being clicked from the main menu
const RecipeDetail = () => {

    const [inputs, setInputs] = useState({});

    const id = useParams().id; 
    console.log(id);
    const history = useNavigate();
    useEffect(() => {
        const fetchHandler = async() =>{
            await axios.get(`http://localhost:5001/recipes/${id}`)
            .then(res=>res.data).then(data=>setInputs(data.recipe)); 
        }
        fetchHandler();
    },[id]);
    const sendRequest = async()=>{
        await axios.put("http://localhost:5001/recipes/${id}",{
            recipeId:Number(inputs.recipeId),
            name:String(inputs.name),
            ingredients:String(inputs.ingredients),
            description:String(inputs.description),
            image:String(inputs.imageLink)
        }).then(res=>res.data)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        sendRequest().then(()=>history("/recipes"))
    }
    const handleChange =(event) =>{
        setInputs((prevState)=>({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }
    return (
    <div>
    { inputs && (   
        <form onSubmit={handleSubmit}>
        <Box 
        diplay="flex" 
        flexDirection="Column" 
        justifyContent={'center'}
        maxWidth={700}
        alignContent={"center"}
        alignSelf={"center"}
        marginLeft={"auto"}
        marginRight={"auto"}
        marginTop={10}>

            <FormLabel>Recipe ID</FormLabel>
            <TextField 
            type = "number"
            margin="normal"
            fullWidth variant='outlined' 
            name="recipeId"
            value={inputs.recieptId}
            onChange={handleChange}/>

            <FormLabel>Name</FormLabel>
            <TextField 
            margin="normal"
            fullWidth variant='outlined'
            name="name"
            value={inputs.name}
            onChange={handleChange}/>
            <FormLabel>Ingredients</FormLabel>
            
            <TextField 
            margin="normal"
            fullWidth variant='outlined'
            name="ingredients"
            value={inputs.ingredients}
            onChange={handleChange}/>
            <FormLabel>Description</FormLabel>
            
            <TextField 
            margin="normal"
            fullWidth variant='outlined'
            name="description"
            value={inputs.description}
            onChange={handleChange}/> 
            
            <FormLabel>Image Link</FormLabel>
            <TextField 
            margin="normal"
            fullWidth variant='outlined'
            name="imageLink"
            value={inputs.imageLink}
            onChange={handleChange}/>  
            
            <Button variant='contained' 
            type="submit"
            justifyContent="center"
            fullWidth= "outlined"
            color="primary">
                Add your new recipe!    
            </Button>  
        </Box>
    </form>
    )}
    </div>
  )
}

export default RecipeDetail
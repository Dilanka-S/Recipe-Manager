import { Box, Button, FormLabel, TextField } from '@mui/material';
import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipe = () => {
    const history = useNavigate
    const [inputs, setInputs] = useState({
        recipeId: '',
        name: '',
        ingredients: '',
        description: '',
        image:''
    }
    );
    const handleChange=(e)=>{
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value
        }));
        console.log(e.target.name,"Value", e.target.value);
    }

    //Function to send the requests to the database with user data
    const sendRequest = async() => {
        await axios.post("http://localhost:5001/recipes",{
            recipeId:Number(inputs.recipeId),
            name:String(inputs.name),
            ingredients:String(inputs.ingredients),
            description:String(inputs.description),
            image:String(inputs.imageLink)
        }).then(res => res.data);
    }

    // Method to handle the submission event
    const handleSubmit= (event) => {
        event.preventDefault();
        console.log(inputs);
        sendRequest().then(()=>history('/recipes'));
    }
    return <form onSubmit={handleSubmit}>
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
            <h1>Let's add a new recipe to your collection!</h1>
            
            <FormLabel sx={{fontFamily:"Barlow"}}>Recipe ID</FormLabel>
            <TextField 
            type = "number"
            fontFamily = "Barlow"
            margin="normal"
            fullWidth variant='outlined' 
            name="recipeId"
            value={inputs.recipeId}
            onChange={handleChange}/>

            <FormLabel sx={{fontFamily:"Barlow"}}>Name</FormLabel>
            <TextField 
            margin="normal"
            fullWidth variant='outlined'
            name="name"
            value={inputs.name}
            onChange={handleChange}/>

            <FormLabel sx={{fontFamily:"Barlow"}}>Ingredients</FormLabel>
            <TextField 
            margin="normal"
            fullWidth variant='outlined'
            name="ingredients"
            value={inputs.ingredients}
            onChange={handleChange}/>

            <FormLabel sx={{fontFamily:"Barlow"}}>Description</FormLabel>
            <TextField 
            margin="normal"
            fullWidth variant='outlined'
            name="description"
            value={inputs.description}
            onChange={handleChange}/> 
            
            <FormLabel sx={{fontFamily:"Barlow"}}>Image Link</FormLabel>
            <TextField 
            margin="normal"
            fullWidth variant='outlined'
            name="imageLink"
            value={inputs.imageLink}
            onChange={handleChange}/>  
            
            <Button 
            variant='contained' 
            type="submit"
            justifyContent="center"
            fullWidth= "outlined"
            color="secondary"
            background="black"
            sx={{fontFamily:"Barlow"}}>
                submit new recipe    
            </Button>    
        </Box>
    </form>
}

export default AddRecipe
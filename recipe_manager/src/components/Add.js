import { Box, FormLabel, TextField } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipe = () => {
  return <form>
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
            margin="normal"
            fullWidth variant='outlined'
            name="name">
            </TextField>
            <FormLabel>Name</FormLabel>
            <TextField 
            margin="normal"
            fullWidth variant='outlined'
            name="name">
            </TextField>
            <FormLabel>Ingredients</FormLabel>
            <TextField 
            margin="normal"
            fullWidth variant='outlined'
            name="name">
            </TextField>
            <FormLabel>Description</FormLabel>
            <TextField 
            margin="normal"
            fullWidth variant='outlined'
            name="name"></TextField>       
        </Box>
    </form>
  
}

export default AddRecipe
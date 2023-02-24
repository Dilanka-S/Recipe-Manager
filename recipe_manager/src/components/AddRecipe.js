import { Box, FormLabel, TextField } from '@mui/material';
import React from 'react';

const AddRecipe = () => {
  return <form>
        <Box 
        diplay="flex" 
        flexDirection="Column" 
        justifyContent={'center'}>
            <FormLabel>Recipe ID</FormLabel>
            <TextField 
            margin="normal"
            fullWidth variant='outlined'
            name="name">
            <FormLabel>Name</FormLabel>
            <TextField 
            margin="normal"
            fullWidth variant='outlined'
            name="name"></TextField>
            <FormLabel>Ingredients</FormLabel>
            <TextField 
            margin="normal"
            fullWidth variant='outlined'
            name="name"></TextField>
            <FormLabel>Description</FormLabel>
            <TextField 
            margin="normal"
            fullWidth variant='outlined'
            name="name"></TextField>
            </TextField>        
        </Box>
    </form>
  
}

export default AddRecipe
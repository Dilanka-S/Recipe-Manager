import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return <div>
    <Box 
    display={"flex"}
    flexDirection={"column"}
    alignContent={"center"}>
        <h1 alignContent="center">Welcome to THE RECIPE MANAGER!</h1>
        <Button 
        LinkComponent={Link} to="/recipes"
        sx={{marginTop: 15, background:'orangered'}} 
        variant='contained'>
            <Typography variant="h3"> View All Recipes </Typography>
        </Button>
    </Box>
    </div>
}

export default Home
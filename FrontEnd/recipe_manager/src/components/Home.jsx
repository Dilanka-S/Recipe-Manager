import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return <div>
    <Box 
    display={"flex"}
    flexDirection={"column"}
    alignContent={"center"}>
        <Typography 
        sx={{fontFamily:"Barlow"}}
        variant="h1"
        marginTop={"30px"}
        marginLeft={"20px"}
        //justifySelf={"center"}
        >WELCOME TO THE<br/>RECIPE MANAGER!
        </Typography>
        <Button 
        LinkComponent={Link} to="/recipes"
        sx={{marginTop: 5, background:'black', fontFamily:'Barlow'}} 
        variant='contained'>
            <Typography variant="h3"> View All Recipes </Typography>
        </Button>
    </Box>
    </div>
}

export default Home
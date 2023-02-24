import { Box, Typography } from '@mui/material'
import React from 'react'

const Creator = () => {
  return <div>
    <Box display='flex'  flexDirection='Column' alignItems='left' justifyContent='flex'>
        <Typography 
        sx={{fontFamily:"Barlow", alignContent:"end", justifyContent:"end"}}
        variant="h2"
        marginTop={"10px"}
        marginLeft={"100px"}>This a sample CRUD Application,<br/> built with MERN stack
        </Typography>
        <Typography 
        sx={{fontFamily:"Barlow"}}
        variant="h4"
        //marginTop={"20px"}
        marginLeft={"100px"}>To showcase the functionality of a recipe managment application
        </Typography>
        <Typography 
        sx={{fontFamily:"Barlow"}}
        variant="h4"
        marginTop={"30px"}
        marginLeft={"500px"}>BY
        </Typography>
        <Typography 
        sx={{fontFamily:"Barlow"}}
        variant="h1"
        marginTop={"px"}
        marginLeft={"500px"}>DILANKA SENEVIRATNE
        </Typography>

        
        


    </Box>
    </div>
  
}

export default Creator
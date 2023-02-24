import { Box, Typography } from '@mui/material'
import React from 'react'

const Creator = () => {
  return <div>
    <Box display='flex'  flexDirection='Column' alignItems='center'>
        <Typography 
        sx={{fontFamily:"sans-serif"}}
        variant="h2"
        marginTop={"10px"}>This is sample MERN CRUD App
        </Typography>

    </Box>
    </div>
  
}

export default Creator
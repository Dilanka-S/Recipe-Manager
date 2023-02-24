import { Box, Typography } from '@mui/material'
import React from 'react'

const Creator = () => {
  return <div>
    Creator
    Name : Dilanka
    <Box display='flex'  flexDirection='Column' alignItems='center'>
        <Typography 
        sx={{fontFamily:"fantasy"}}
        variant="h2">This is sample MERN CRUD App
        </Typography>

    </Box>
    </div>
  
}

export default Creator
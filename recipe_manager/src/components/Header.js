import React,{useState} from 'react';
import {AppBar, Tab, Tabs, Toolbar, Typography} from '@mui/material';
import BrunchDiningIcon from '@mui/icons-material/BrunchDining';
import {NavLink} from 'react-router-dom'
const Header = () => {
    const [value, setValue] = useState()
  return (
    <div> 
        <AppBar 
        position='sticky'
        sx = {{backgroundColor:'#000000'}}>
            <Toolbar>
                <Typography>
                    <BrunchDiningIcon/> THE RECIPE MANAGER
                </Typography>
                <Tabs 
                sx= {{ml:'auto'}}
                textColor="inherit" 
                indicatorColor="secondary" 
                value={value} 
                onChange={(e, val) => setValue(val)}>
                    <Tab 
                    LinkComponent={NavLink} 
                    to="/add" 
                    label='Add Recipe'/>

                    <Tab 
                    LinkComponent={NavLink} 
                    to="/creator" 
                    label='View Creator'/>
                </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header 
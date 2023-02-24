import React,{useState} from 'react';
import {AppBar, Tab, Tabs, Toolbar, Typography} from '@mui/material';
import BrunchDiningIcon from '@mui/icons-material/BrunchDining';
import {NavLink} from 'react-router-dom';
const Header = () => {
    const [value, setValue] = useState()
  return (
    <div> 
        <AppBar 
        position='sticky'
        sx = {{backgroundColor:'#000000', fontFamily:""}}>
            <Toolbar>
                <NavLink to="/"style={{ color:"white", textDecoration: 'none'}}>
                <Typography sx={{fontFamily:"Barlow"}}>
                    <BrunchDiningIcon/> THE RECIPE MANAGER
                </Typography>
                </NavLink>
                <Tabs 
                sx= {{ml:'auto'}}
                textColor="inherit" 
                indicatorColor="secondary" 
                value={value} 
                onChange={(e, val) => setValue(val)}>
                    <Tab
                    sx={{fontFamily:"Barlow"}} 
                    LinkComponent={NavLink} 
                    to="/recipes" 
                    label='Recipes'/>

                    <Tab
                    sx={{fontFamily:"Barlow"}} 
                    LinkComponent={NavLink} 
                    to="/add" 
                    label='Add Recipe'/>

                    <Tab
                    sx={{fontFamily:"Barlow"}} 
                    onClick={()=>{
                        window.location.reload();
                    }}
                    label="Refresh"/>

                    <Tab 
                    sx={{fontFamily:"Barlow"}}
                    LinkComponent={NavLink} 
                    to="/creator" 
                    label='The Creator'/>
                </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  );
};

export default Header 
import React from 'react'
import{Box } from "@mui/material"; 
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Home,Pages,Groups,Storefront,GroupAdd,Settings,Place, ModeNight,} from '@mui/icons-material';
import Switch from '@mui/material/Switch';


const Sidebar = ({mode,setMode}) => {
  return (
    <Box  bgcolor="" 
    
    flex={1}
    p={2}
    sx={{display:{xs:"none",sm:"block"}}}

    >
    
          


<List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Home">
              <ListItemIcon>
                <Home/>
                
              </ListItemIcon>
              <ListItemText primary="HomePage" />
            </ListItemButton> 
          </ListItem>  

          <ListItem disablePadding>
            <ListItemButton component="a" href="#Pages">
              <ListItemIcon>
                <Pages/>
                
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton> 
          </ListItem>  
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Groups">
              <ListItemIcon>
                <Groups/>
                
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton> 
          </ListItem>  

          <ListItem disablePadding>
            <ListItemButton component="a" href="#Marketplace">
              <ListItemIcon>
                <Storefront/>
                
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton> 
          </ListItem>  
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Friends">
              <ListItemIcon>
                <GroupAdd/>
                
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton> 
          </ListItem>  
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Settings">
              <ListItemIcon>
                <Settings/>
                
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButton> 
          </ListItem>  
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Place">
              <ListItemIcon>
                <Place/>
                
              </ListItemIcon>
              <ListItemText primary="Place" />
            </ListItemButton> 
          </ListItem>  
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Simple-lis">
              <ListItemIcon>
                <ModeNight/>
                
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode==="light"?"dark": "light")}/>
            </ListItemButton> 
          </ListItem>  

        
  </List>
  
  </Box>
  )
  
}

export default Sidebar
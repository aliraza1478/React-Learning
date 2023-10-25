import React from 'react'
import { AppBar, styled,Toolbar } from '@mui/material'


const StyledToolbar=styled(Toolbar)({
 display:"flex",
 justifyContent:"space-between",

})



const Navbar = () => {
  return (
    <AppBar position='static'> 
        <StyledToolbar> 
             Navbar</StyledToolbar>
        
       
        

        </AppBar>
  )
}

export default Navbar
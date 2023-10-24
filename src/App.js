import {React,useState} from 'react'
import Feed from "./components/Feed"
import Rightbar from "./components/Rightbar"

import Navbar from './components/Navbar'
import Add from './components/Add'
import{Box, Stack, ThemeProvider, createTheme}from "@mui/material";





const App = () => {

const[mode,setMode]=useState("light")
  const darkTheme=createTheme({
    palette:{
      mode:mode
    }
  })
  return (

    <ThemeProvider theme={darkTheme}>
   
   <Navbar/>  
   
    <Box bgcolor={"background.default"} color={"text.primary"}>



<Stack direction="row" spacing={2} justifyContent="space-evenly">

<Feed/>


<Rightbar/>



</Stack>
<Add/>

    </Box>
    </ThemeProvider>   
      
  )
}

export default App
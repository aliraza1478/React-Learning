import React from 'react'
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Box, Stack } from '@mui/material';

const App = () => {
  return (
<Box>
  <Navbar/>
<Stack direction="row" spacing={2} justifyContent="space-evenly" > 

    <Sidebar/>
    <Feed/>
    <Rightbar/>
    
    </Stack>
    </Box>
  )
}

export default App;
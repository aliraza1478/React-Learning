import React from 'react'
import {useState} from 'react';
import{Add as AddIcon, EmojiEmotions,PersonAdd,VideoCameraBack} from '@mui/icons-material';
import { Tooltip,Fab,Box,Modal,styled, Typography,Avatar,TextField, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DateRangeIcon from '@mui/icons-material/DateRange';


const StyledModal= styled(Modal)({
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
})

const UserBox= styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px"


  })
  

const Add = () => {
const[open, setOpen] = useState(false) 
    return (

    <>
    <Tooltip onClick={e=>setOpen(true)}  title="Delete" 
    sx={{position:"fixed"
    ,bottom:20,
    left:{xs:"calc(50% - 25px)",md:30}}}
     > 
    <Fab color="primary" aria-label="add">
    <AddIcon />
  </Fab>
  
     </Tooltip>

     <StyledModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280}  
  bgcolor={"background.default"} 
  color={"text.primary"} 
  p={3} 
   borderRadius={5}  > 
    
    <Typography variant="h6" color="gray" textAlign="center" > Create Your Post</Typography>
    <UserBox>
        <Avatar src="https://up.yimg.com/ib/th?id=OIP.KMMraJMUTn4_YG31IY5QmAHaHS&%3Bpid=Api&w=474&c=1&rs=1&qlt=95"
        sx={{widht:30,heigh:30}}
        />
        <Typography fontWeight={500} variant='span'>
            John
        </Typography>

    </UserBox>
    <TextField
    sx={{width:"100%"}}
          id="standard-multiline-static"
          Multiline
          multiline
          rows={3}
          defaultValue="What's on your Mind"
          variant="standard"
        />
<Stack direction="rpw" gap={1} mt={2} mb={3}>
<EmojiEmotions color="primary"/>
<imge color="secondary"/>
<VideoCameraBack color="success"/>
<PersonAdd color ="red"/>

</Stack>

<ButtonGroup
fullWidth 
variant="contained" aria-label="outlined primary button group">
  <Button sx={{widht:"100%"}}>Post</Button>

  <Button><DateRangeIcon/></Button>
  
</ButtonGroup>

  </Box>
</StyledModal>


     </>
  )
}

export default Add
import React from 'react'
import{Box,Typography,CardMedia,CardContent, Card,CardActions,Avatar, CardHeader,IconButton,Checkbox} from "@mui/material";
import {Favorite,MoreVert,Share,FavoriteBorder} from '@mui/icons-material'



const Post = () => {
  return (
<Box>
    <Card >
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVert />
        </IconButton>
      }
      title="Shrimp and Chorizo Paella"
      subheader="September 14, 2016"
    />
    <CardMedia
      component="img"
      height="20%"
      image="https://s.yimg.com/fz/api/res/1.2/Bwj8RURCmrEk6ubOFHbCvA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0zODQ7cT04MDt3PTUxMg--/https://s.yimg.com/os/creatr-uploaded-images/2023-10/235cedd0-6edb-11ee-a9ef-18997c3c4582"
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />}  />

        
      </IconButton>
      <IconButton aria-label="share">
        <Share />
      </IconButton>
     
    </CardActions>
   
  </Card>

  </Box>
  )
}

export default Post
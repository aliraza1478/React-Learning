import React from 'react'
import{Box, ListItemAvatar,ListItemText,Divider,ListItem, List, Typography,Avatar,AvatarGroup, ImageList, ImageListItem} from "@mui/material"
const Rightbar = () => {
  return (
    <Box bgcolor="" flex={2} p={2}>
    
  <Box position="fixed">
    <Typography variant='h6' fontWeight={100}> Online Friends</Typography>
    <AvatarGroup max={5} >
  <Avatar alt="Remy Sharp" src= "http://material-ui.com/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="http://material-ui.com/static/images/avatar/2.jpg" />
  <Avatar alt="Cindy Baker" src="http://material-ui.com/static/images/avatar/3.jpg" />
  <Avatar alt="Agnes Walker" src="http://material-ui.com/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="http://material-ui.com/static/images/avatar/5.jpg" />
</AvatarGroup>

<Typography variant='h6' fontWeight={100} mt={2} mb={2}> Latest Photos</Typography>
<ImageList cols={3} rowHeight={100} gap={5}>
<ImageListItem>


<img src="https://up.yimg.com/ib/th?id=OIP.94B6nyiv5jlgj3LH4CdCzQHaE8&%3Bpid=Api&w=474&c=1&rs=1&qlt=95" alt=""/>
</ImageListItem>


<ImageListItem>


<img src="https://up.yimg.com/ib/th?id=OIP.fwzql42br6Zu31rcjuNF6wHaFH&%3Bpid=Api&w=474&c=1&rs=1&qlt=95" alt=""/>

</ImageListItem>

<ImageListItem>
<img src="https://up.yimg.com/ib/th?id=OIP.AHj0Co5bPLXixDMcIj1DcgHaDt&%3Bpid=Api&w=474&c=1&rs=1&qlt=95" alt=""/>


</ImageListItem>




</ImageList>

<Typography variant='h6' fontWeight={100} mt={2} mb={2}> Latest Converstions</Typography>

<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://up.yimg.com/ib/th?id=OIP.Td5Adxm_ErS9a7x_Y918uQHaFj&%3Bpid=Api&w=474&c=1&rs=1&qlt=95" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>


    </Box>
    </Box>
  )
}

export default Rightbar
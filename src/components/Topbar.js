import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';


// function Navbar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//                 </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Dashboard
//           </Typography>
//           <Button color="inherit">Logout</Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }

const drawerWidth = 240;

  function PermanentDrawerLeft() {
  return (
    
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
    
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Avatar>H</Avatar>
        <Typography>Admin</Typography>

        <Toolbar />
        <Divider />
        <List>
          {['Associate Profiles', 'Add Associate', 'Bookings' ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              
              <ListItemText primary={text} />
            </ListItem>
          ))}
          
        </List>
        <Divider />
    
 
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        
        <Toolbar />
       
      </Box>
    </Box>
    
  );
}
export {PermanentDrawerLeft};

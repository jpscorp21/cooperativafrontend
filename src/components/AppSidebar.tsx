import { AppBar, Collapse, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography, useTheme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';
import React, { useMemo } from 'react'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { menu, MenuItem } from '../data/menu';
import {teal, grey} from '@material-ui/core/colors';
import { StarBorder } from '@material-ui/icons';

const color = teal[500];

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  appBar: {    
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawer: {    
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    boxSizing: 'border-box',
    color: 'white',
    background: `#263238 !important`
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  hide: {
    display: 'none'
  },
  content: {
    flexGrow: 1,    
    paddingTop: '50px',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const AppSidebar = () => {

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [openCollapse, setOpenCollapse] = React.useState<{[key: string]: boolean}>({});
  const theme = useTheme(); 

  const menuSidebar = useMemo(() => [...menu], []);

  const [mobileOpen, setMobileOpen] = React.useState(true);


  const handleDrawerToggle = () => {
    setOpen(prev => !prev);    
  }


  const handleDrawerClick = (text: string) => {
    console.log('click');
    setOpenCollapse(prev => ({...prev, [text]: !prev[text] }));

  }

  return ( 
    <div className={classes.root}>
    <AppBar 
      position="fixed"
      className={clsx(classes.appBar, 
      {
        [classes.appBarShift]: open
      })}
    >
      <Toolbar variant="dense" sx={{pl: 0}}> 
        <IconButton
          color="inherit"
          size="small"   
          edge="start"       
          aria-label="abrir drawer"
          sx={{ mr: 2, pt: 0, pl: 0 }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon fontSize="medium" />
        </IconButton>
        <Typography variant="h6" component="div">
              Estrella Ltda
        </Typography>
      </Toolbar>
    </AppBar>
    
    <Drawer
      className={classes.drawer}
      classes={{paper: classes.drawerPaper}}      
      variant="persistent"
      anchor="left"      
      open={open}
    >
      {/* <div className={classes.drawerHeader}>
          <IconButton sx={{color: 'white'}} onClick={handleDrawerClick}> 
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
      </div> */}
      <List>
        { 
          menuSidebar.map(item => (
            <>
              <MenuItem menu={item} click={handleDrawerClick} collapse={openCollapse} />
            {/* <ListItem button key={item.text} onClick={() => handleDrawerClick(item.text)}>
              <ListItemIcon sx={{color: 'white'}}>
                {item.icon}
              </ListItemIcon>              
              <ListItemText sx={{color: 'white'}}>{item.text}</ListItemText> 
              {openCollapse[item.text] ? <ExpandLessIcon sx={{color: 'white'}} /> : < ExpandMoreIcon sx={{color: 'white'}} />}                   
            </ListItem> */}
            {
              item.submenu ? 
                (
                  <Collapse sx={{backgroundColor: "#35444C"}} in={openCollapse[item.text]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                  {
                    item.submenu.map(subitem => <MenuItem menu={subitem} click={handleDrawerClick} collapse={openCollapse} submenu />)    
                  }
                  </List>
                </Collapse>                
                
              ) : null
            }
            </>
          ))
        }
      </List>
    </Drawer>
    <main className={clsx(classes.content, {
      [classes.contentShift]: open
    })}>
      <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
      </Typography>
      <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
    </main>
    </div>
    // <Drawer
    //         container={document.body}
    //         variant="temporary"
    //         open={mobileOpen}
    //         onClose={handleDrawerToggle}            
    //         ModalProps={{
    //           keepMounted: true, // Better open performance on mobile.
    //         }}
    //       >
    //         <List>
    //           {
    //             menuSidebar.map(item => (
    //               <ListItem key={item.text}>
    //                 <ListItemText>{item.text}</ListItemText>                    
    //               </ListItem>
    //             ))
    //           }
    //         </List>
    // </Drawer>
  )
}

export default AppSidebar;

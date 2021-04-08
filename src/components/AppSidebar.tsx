import { AppBar, Collapse, Drawer, Hidden, IconButton, List, makeStyles, Toolbar, Typography, useTheme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';
import React, { useEffect, useMemo } from 'react'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { menu, MenuItem, Menu } from '../data/menu';
import {teal} from '@material-ui/core/colors';
import { cssHelper } from '../utils/helpers';
import useResponsive from '../utils/hooks/useResponsive';


const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  appBar: {       
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),       
    // [theme.breakpoints.up('sm')]: {
    //   width: cssHelper.important(`calc(100% - ${drawerWidth}px)`),    
    //   transition: theme.transitions.create('width', {
    //     easing: theme.transitions.easing.easeOut,
    //     duration: theme.transitions.duration.enteringScreen,
    //   }),         
    // },         
  },
  appBarShift: {
    [theme.breakpoints.up('sm')]: {
      width: cssHelper.important(`calc(100% - ${drawerWidth}px)`),    
      marginLeft: drawerWidth,      
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),       
    },  
       
  },
  // menuButton: {    
  //   [theme.breakpoints.up('sm')]: {
  //     display: cssHelper.important('none')
  //   }
  // },
  // necessary for content to be below app bar
  toolbar: {
    ...theme.mixins.toolbar,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  toolbarShift: {    
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawer: {  
    width: drawerWidth,
    flexShrink: 0,
    // [theme.breakpoints.up('sm')]: {
    //   width: drawerWidth,
    //   flexShrink: 0,
    //   transition: theme.transitions.create('width', {
    //     easing: theme.transitions.easing.easeOut,
    //     duration: theme.transitions.duration.enteringScreen,
    //   }), 
    // },      
  },
  // drawerShift: {  
  //   [theme.breakpoints.up('sm')]: {      
  //     transition: theme.transitions.create('width', {
  //       easing: theme.transitions.easing.easeOut,
  //       duration: theme.transitions.duration.enteringScreen,
  //     }),          
  //   },      
  // },
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
    marginLeft: -drawerWidth,
    flexGrow: 1,   
    [theme.breakpoints.up('sm')]: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),    
      marginLeft: -drawerWidth,
    },    
  },
  contentShift: {
    [theme.breakpoints.up('sm')]: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),    
      marginLeft: 0,
    }
  },
}));

const AppSidebar = () => {

  const classes = useStyles();
  
  const [open, setOpen] = React.useState(true); 
  const [openCollapse, setOpenCollapse] = React.useState<{[key: string]: boolean}>({});
  const theme = useTheme(); 

  const { mobile } = useResponsive();

  const menuSidebar = useMemo(() => [...menu], []);

  const [mobileOpen, setMobileOpen] = React.useState(false);

  useEffect(() => {
    if (mobile) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [mobile])


  const handleDrawerToggle = () => {
    setOpen(prev => !prev);    
  }


  const handleDrawerClick = (menu: Menu) => {
    if (menu.url && mobile) {
      setOpen(false);
      // setOpenCollapse({});
    }
    setOpenCollapse(prev => ({...prev, [menu.text]: !prev[menu.text] }));

  }

  const contentDrawer = (
    <div>

        {/* <div className={classes.toolbar}></div> */}
            {/* <IconButton sx={{color: 'white'}} onClick={handleDrawerClick}> 
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton> */}        
        <List>
          { 
            menuSidebar.map(item => (
              <>
              <MenuItem menu={item} key={item.text} click={handleDrawerClick} collapse={openCollapse} />            
              {
                item.submenu ? 
                  (
                    <Collapse sx={{backgroundColor: "#35444C"}} in={openCollapse[item.text]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    {
                      item.submenu.map(subitem => <MenuItem key={subitem.text} menu={subitem} click={handleDrawerClick} collapse={openCollapse} submenu />)    
                    }
                    </List>
                  </Collapse>                
                  
                ) : null
              }
              </>
            ))
          }
        </List>
    </div>
  )

  return ( 
    <div className={classes.root}>
    
    <AppBar 
      position="fixed"
      className={clsx(classes.appBar)}
    >
      <Toolbar variant="dense" className={clsx(classes.toolbar, {
        [classes.appBarShift]: open,
        [classes.toolbarShift]: !open,
        
      })}> 
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
        <Typography variant="h6" noWrap component="div">
              Estrella Ltda
        </Typography>
      </Toolbar>
    </AppBar>
    <nav className={clsx(classes.drawer)}> 
      <Hidden smDown implementation="css">
        <Drawer          
          classes={{paper: classes.drawerPaper}}      
          variant="persistent"               
          open={open}
        >
          {contentDrawer}
        </Drawer>
      </Hidden>
      <Hidden smUp implementation="css">
        <Drawer 
          variant="temporary"
          open={open && mobile}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper
          }}          
          ModalProps={{keepMounted: true}}
        >
          {contentDrawer}
        </Drawer>
      </Hidden>
    </nav>
    <main className={clsx(classes.content, {[classes.contentShift]: open})}>
      <div className={classes.toolbar}></div>
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

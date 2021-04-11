import { AppBar, Box, Collapse, Drawer, Hidden, IconButton, List, makeStyles, Toolbar, Typography, useTheme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';
import React, { PropsWithChildren, useEffect, useMemo } from 'react'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { menu, MenuItem, Menu } from '../data/menu';
import {blueGrey, deepPurple, grey, teal} from '@material-ui/core/colors';
import { cssHelper } from '../utils/helpers';
import useResponsive from '../utils/hooks/useResponsive';
import { useHistory } from 'react-router';
<div>
  <MenuIcon></MenuIcon>
</div>

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
  },
  drawerPaper: {
    width: drawerWidth,
    boxSizing: 'border-box',
    color: 'white',
    background: cssHelper.important('#2D3F50')
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
        easing: theme.transitions.easing.easeOut,
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

const AppSidebar = ({children}: PropsWithChildren<{}>) => {

  const history = useHistory();

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

    if (menu.url) {
      history.push(menu.url);
    }

    if (menu.url && mobile) {
      setOpen(false);
      
      // setOpenCollapse({});
    }
    setOpenCollapse(prev => ({...prev, [menu.text]: !prev[menu.text] }));

  }

  const contentDrawer = (
    <div>             
        <List>
          { 
            menuSidebar.map((item, index) => (
              <React.Fragment key={index}>
              <MenuItem menu={item} click={handleDrawerClick} collapse={openCollapse} />            
              {
                item.submenu ? 
                  (
                    <Collapse sx={{backgroundColor: blueGrey[900]}} in={openCollapse[item.text]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    {
                      item.submenu.map((subitem, index) => <MenuItem key={index} menu={subitem} click={handleDrawerClick} collapse={openCollapse} submenu />)    
                    }
                    </List>
                  </Collapse>                
                  
                ) : null
              }
              </ React.Fragment>
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
          edge="start"                 
          aria-label="abrir drawer"
          sx={{ p: 1 }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon fontSize="medium" />
        </IconButton>
        <Typography sx={{color: 'white', fontWeight: "500"}} variant="h5" noWrap component="div">
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
    <main className={clsx(classes.content, {[classes.contentShift]: open, [classes.toolbarShift]: !open })}>
      <Box sx={{mt: 6}}></Box>
      {children}
    </main>
    </div>   
  )
}

export default AppSidebar;

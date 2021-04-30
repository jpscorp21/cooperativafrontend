import { AppBar, Box, Collapse, Drawer, Hidden, IconButton, List, makeStyles, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import React, { PropsWithChildren, useEffect, useMemo } from 'react'
import { menu, MenuItem, Menu } from '../data/menu';
import { cssHelper } from '../utils/helpers';
import useResponsive from '../utils/hooks/useResponsive';
import { useHistory } from 'react-router';


const drawerWidth = 300;
const breakpointDrawer = 'md';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  appBar: {       
    
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),           
  },
  appBarShift: {
    [theme.breakpoints.up(breakpointDrawer)]: {
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
    background: cssHelper.important('#263238')    
    // background: cssHelper.important('#0B233C')    
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
    maxWidth: '100%',
    marginLeft: '0',
    flexShrink: 1,
    [theme.breakpoints.up(breakpointDrawer)]: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.leavingScreen,
      }),    
      marginLeft: '0',
    },    
  },
  contentShift: {
    [theme.breakpoints.up(breakpointDrawer)]: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),                
      marginLeft: '300px',
    },
  },
}));

const AppSidebar = ({children}: PropsWithChildren<{}>) => {

  const history = useHistory();

  const classes = useStyles();
  
  const [open, setOpen] = React.useState(true); 
  const [openCollapse, setOpenCollapse] = React.useState<{[key: string]: boolean}>({});

  const { desktop } = useResponsive();

  const menuSidebar = useMemo(() => [...menu], []);  

  useEffect(() => { 
    if (desktop) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [desktop])


  const handleDrawerToggle = () => {
    setOpen(prev => !prev);    
  }


  const handleDrawerClick = (menu: Menu) => {

    if (menu.url) {
      history.push(menu.url);
    }

    if (menu.url && desktop) {
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
                    <Collapse sx={{backgroundColor: '#35444C'}} in={openCollapse[item.text]} timeout="auto" unmountOnExit>
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
          edge="start"                 
          aria-label="abrir drawer"
          sx={{ p: 1 }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon fontSize="medium" sx={{color: 'white'}} />
        </IconButton>
        <Typography sx={{color: 'white', fontWeight: "500"}} variant="h5" noWrap component="div">
              Estrella Ltda
        </Typography>
      </Toolbar>
    </AppBar>
    <nav className={clsx(classes.drawer)}> 
      <Hidden mdDown implementation="css">
        <Drawer          
          classes={{paper: classes.drawerPaper}}      
          variant="persistent"               
          open={open}
        >
          {contentDrawer}
        </Drawer>
      </Hidden>
      <Hidden mdUp implementation="css">
        <Drawer 
          variant="temporary"
          open={open && desktop}
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

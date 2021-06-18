import { AppBar, Avatar, Box, Collapse, Divider, Drawer, IconButton, List, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import clsx from 'clsx';
import React, { PropsWithChildren, useEffect, useMemo } from 'react'
import { menu, MenuItem, Menu } from '../data/menu';
import { cssHelper } from '../utils/helpers';
import useResponsive from '../utils/hooks/useResponsive';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/styles';
import theme from '../config/theme';
import { useAtom } from 'jotai';
import usuarioAtom from '../shared/atoms/usuarioAtom';
import { deepOrange } from '@material-ui/core/colors';
import { menuRole } from '../data/menu-data';

const drawerWidth = 300;
const breakpointDrawer = 'md';

const useStyles = makeStyles((theme2) => ({
  root: {
    // display: 'flex',    
  },
  appBar: {     
      
    zIndex: 1000000,
    // transition: theme.transitions.create(['margin', 'width'], {
    //   easing: theme.transitions.easing.easeOut,
    //   duration: theme.transitions.duration.leavingScreen,
    // }),           
  },
  appBarShift: {
    
    // [theme.breakpoints.up(breakpointDrawer)]: {
    //   width: cssHelper.important(`calc(100% - ${drawerWidth}px)`),    
    //   marginLeft: drawerWidth,      
    //   transition: theme.transitions.create(['margin', 'width'], {
    //     easing: theme.transitions.easing.easeOut,
    //     duration: theme.transitions.duration.leavingScreen,
    //   }),       
    // },  
       
  },
  // necessary for content to be below app bar
  toolbar: {
    ...theme.mixins.toolbar,    
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
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
    // color: 'white',
    background: cssHelper.important('white')    
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
        
    // marginLeft: '0px',    
    [theme.breakpoints.up(breakpointDrawer)]: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.leavingScreen,
      }),    
      marginLeft: '300px',
    },    
  },
  contentShift: {
    [theme.breakpoints.up(breakpointDrawer)]: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),                
      // marginLeft: '300px',
    },
    marginLeft: '0px'
    
  },
}));

const AppSidebar = ({children}: PropsWithChildren<{}>) => {

  const history = useHistory();

  const classes = useStyles();
  const [usuario] = useAtom<any>(usuarioAtom);
  
  const [open, setOpen] = React.useState(true); 
  const [openCollapse, setOpenCollapse] = React.useState<{[key: string]: boolean}>({});
  // const [usuario, setUsuario] = useLocalStorageState('estrella');

  const { desktop } = useResponsive();

  const menuSidebar = useMemo(() => [...menu], []); 
  
  useEffect(() => {
    console.log(usuario);
  }, [])

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
          {
            usuario && usuario.id ? (
            <Box paddingTop="65px" pl={2} sx={{display: 'flex'}}>
              <Avatar variant="square" sx={{background: deepOrange[500], mr: 1, fontWeight: 'bold'}}>{usuario.nombre[0]}</Avatar>
              <Box display="flex" flexDirection={'column'} justifyContent="start">

                <Typography pb={0} mb={0} fontWeight="bold" sx={{textTransform: 'capitalize'}} >{usuario.nombre || ''} {usuario.apellido || ''}<small style={{fontWeight: 'normal'}}></small></Typography>
                <small style={{paddingTop: '8px ', margin: 0, lineHeight: '0', color: '#777'}}>{usuario.role}</small>
              </Box>
            </Box>
            ) : null
          }
          

        <List>
          { 
            !usuario || !usuario.id ? [] : menuRole[usuario.roleId].map((item, index) => (
              <React.Fragment key={index}>
              <MenuItem menu={item} click={handleDrawerClick} collapse={openCollapse} />
              <Divider sx={{mx: 2}} />            
              {
                item.submenu ? 
                  (
                    <Collapse sx={{backgroundColor: '#eee'}} in={openCollapse[item.text]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    {
                      item.submenu.map((subitem, index) => (
                        <React.Fragment key={index}>
                          <MenuItem menu={subitem} click={handleDrawerClick} collapse={openCollapse} submenu />
                          <Divider sx={{mx: 2}} />            
                        </React.Fragment>
                      ))    
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
    <>
    <AppBar 
      position="fixed"      
      className={clsx(classes.appBar, {[classes.appBarShift]: open})}
    >
      <Toolbar variant="dense" className={clsx(classes.toolbar, {        
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
        <Typography 
          onClick={() => history.push('/')} 
          sx={{color: 'white', fontWeight: "500", cursor: 'pointer'}} 
          variant="h5" 
          noWrap 
          component="div">
              Estrella Ltda
        </Typography>
        <Box flex={1}></Box>
        <IconButton          
          edge="end"                 
          aria-label="abrir drawer"
          sx={{ p: 1 }}
          onClick={() => history.push('/login')}
        >
          <ExitToAppIcon fontSize="medium" sx={{color: 'white'}} />
        </IconButton>
      </Toolbar>
    </AppBar>
    <div className={classes.root}>
    
    <nav className={clsx(classes.drawer)} style={{zIndex: -10000}}> 
      <Box sx={{display: {xs: 'block', sm: 'block'}}}>
        <Drawer          
          classes={{paper: classes.drawerPaper}}      
          variant="persistent"                      
          open={open}   
          sx={{top: '100px !important'}}       
        >
          
          {contentDrawer}
        </Drawer>
      </Box>
      <Box sx={{display: {md: 'block', lg: 'block', xl: 'block'}}}>
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
      </Box>
    </nav>
    <main className={clsx(classes.content, {[classes.contentShift]: !open, [classes.toolbarShift]: !open })}>
      <Box sx={{mt: 6}}></Box>
      {children}
    </main>
    </div>  
    </> 
  )
}

export default AppSidebar;

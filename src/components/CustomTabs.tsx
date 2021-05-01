import { AppBar, Box, makeStyles, Paper, Tab, Tabs } from '@material-ui/core'
import React from 'react'
import theme from '../config/theme';
import { a11yProps } from './TabPanel'

type CustomTabsProps = {
    value: number;
    onChange: any;
    data: string[];
}

const useStyles = makeStyles((theme: any) => ({
    // tab: {
    //     width: 'auto',
    //     [theme.breakpoints.up('md')]: {
    //       minWidth: 'none !important',    
    //       maxWidth: 'none !important',      
    //       backgroundColor: 'yellow !important'       
    //     },  
    //     [theme.breakpoints.down('md')]: {
    //       minWidth: '0px !important',
    //       backgroundColor: 'red !important'       
    //     },  
           
    //   },
}));

const CustomTabs = ({value, onChange, children, data}: React.PropsWithChildren<CustomTabsProps>) => {       

    const classes = useStyles();

    return (
        <>
                <AppBar position="static" elevation={2}>
                                          
                 
                    <Tabs                    
                        value={value}   
                        textColor="inherit"        
                        color="inherit"                                                    
                        onChange={(_, value) => onChange(value)}
                        variant={'scrollable'}
                        // className="tabs2"
                        scrollButtons="auto"
                        
                        

                        // style={{width: '100%', maxWidth: '80%',overflow: 'auto', position: 'static', marginRight: '0px !important'}}
                                                                
                        aria-label="Scrollable auto tabs example"
                    >                               
                        
                        {data.map((text, index) => <Tab color="inherit" disableRipple key={text} label={text} {...a11yProps(index)} />)}
                    </Tabs>  
                
            
                </AppBar>
            {children}
        </>
    )
}

export default CustomTabs

import { AppBar, Tab, Tabs } from '@material-ui/core'
import React from 'react'
import { a11yProps } from './TabPanel'

type CustomTabsProps = {
    value: number;
    onChange: any;
    data: string[];
}

const CustomTabs = ({value, onChange, children, data}: React.PropsWithChildren<CustomTabsProps>) => {           

    return (
        <>
                <AppBar position="static" elevation={2}>
                                          
                 
                    <Tabs                    
                        value={value}   
                        textColor="inherit"        
                        color="inherit"                                                    
                        onChange={(_, value) => onChange(value)}
                        variant={'scrollable'}                        
                        scrollButtons="auto" 
                        allowScrollButtonsMobile                                                                                                                                   
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

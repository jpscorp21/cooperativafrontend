import { AppBar, Box, Tab, Tabs } from '@material-ui/core'
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
            <Box sx={{borderBottom: 1, borderColor: 'divider', mx: 2}}>                 
                <Tabs                    
                    value={value}                    
                    // sx={{overflow: 'auto'}}
                    // style={{display: 'inline-block'}}
                    onChange={(_, value) => onChange(value)}
                    variant="scrollable"
                    
                    scrollButtons="auto"                                        
                    aria-label="Scrollable auto tabs example"
                >       
                    {data.map((text, index) => <Tab style={{minWidth: '0'}}  key={text} label={text} {...a11yProps(index)} />)}                                                       
                </Tabs>                               
            </Box>
            {children}
        </>
    )
}

export default CustomTabs

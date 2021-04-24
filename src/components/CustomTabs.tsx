import { Box, Tab, Tabs } from '@material-ui/core'
import React, { useMemo } from 'react'
import { a11yProps } from './TabPanel'

type CustomTabsProps = {
    value: number;
    onChange: any;
    data: string[];
}

const CustomTabs = ({value, onChange, children, data}: React.PropsWithChildren<CustomTabsProps>) => {       

    return (
        <>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs                    
                        value={value}
                        onChange={(_, value) => onChange(value)}
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile                    
                        aria-label="Scrollable auto tabs example"
                    >       
                        {data.map((text, index) => <Tab key={text} label={text} {...a11yProps(index)} />)}                                                       
                    </Tabs>                
            </Box>
            {children}
        </>
    )
}

export default CustomTabs

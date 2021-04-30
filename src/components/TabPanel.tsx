import { Box, Container, Typography } from "@material-ui/core";
import React from "react";

type TabPanelProps = {
    value: any,
    index: any,
    [key: string]: any
}

function TabPanel(props: React.PropsWithChildren<TabPanelProps>) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        style={{width: '100%'}}
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={2}>
            {children}
          </Box>
        )}
      </div>
    );
}

export function a11yProps(index: any) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default TabPanel
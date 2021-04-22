import { Box, Button, Typography } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import RefreshIcon from '@material-ui/icons/Refresh';
import React from 'react'

type ButtonActionContainerProps = {
    onNew(): void;
    onRefresh(): void
}

const ButtonActionContainer = ({children, onNew, onRefresh}: React.PropsWithChildren<ButtonActionContainerProps>) => {
    return (
        <Box px={2}>
            <Button 
                variant="contained" 
                size="small" 
                color="secondary" 
                sx={{mb: 2, mr: 1}} 
                onClick={onNew}  
                startIcon={<AddIcon />}>
                Nuevo
            </Button>
            <Button 
                variant="outlined" 
                size="small" 
                color="secondary" 
                sx={{mb: 2}} 
                onClick={onRefresh}  
                startIcon={<RefreshIcon />}
            >
                Refrescar
            </Button>                  
            {children}
        </Box> 
    )
}

export default ButtonActionContainer

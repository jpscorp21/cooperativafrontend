import { Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import RefreshIcon from '@material-ui/icons/Refresh';
import React from 'react'

type ButtonActionContainerProps = {
    onNew(): void;
    onRefresh?(): void
}

const ButtonActionContainer = ({children, onNew, onRefresh}: React.PropsWithChildren<ButtonActionContainerProps>) => {
    return (
        <>
            {children}
            <Button 
                variant="outlined"                                                       
                onClick={onRefresh}  
                size="small"
                startIcon={<RefreshIcon />}>
                Refrescar
            </Button>
            <Button 
                variant="contained"                                 
                onClick={onNew}
                size="small"  
                startIcon={<AddIcon />}>
                Nuevo
            </Button>                        
        </> 
    )
}

export default ButtonActionContainer

import { IconButton, TableCell } from '@material-ui/core'
import React from 'react'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { red } from '@material-ui/core/colors';

interface AccionesCellProps { 
    item: any; 
    onEditar?: (item: any) => void;
    onEliminar?: (item: any) => void;
}

const AccionesCell = ({children, onEditar, onEliminar, item}: React.PropsWithChildren<AccionesCellProps>) => {
    return (
        <TableCell align="right" sx={{minWidth: '100px'}}>
          {children} 
          <IconButton size="small" color="primary" onClick={() => onEditar ? onEditar(item) : null}>
            <EditIcon color="primary"></EditIcon>
          </IconButton> 
          <IconButton size="small" onClick={() => onEliminar && onEliminar(item)}>
            <DeleteIcon sx={{color: red[700]}}></DeleteIcon>
          </IconButton>                  
        </TableCell>
    )
}

export default AccionesCell

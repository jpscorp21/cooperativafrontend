import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import React from 'react'
import { FormModalProps } from '../types'

type ConfirmDialogProps = FormModalProps & {
    message?: string;
    headerText?: string;
    onAceptar: any;
    disabled?: boolean;
}

const ConfirmDialog = ({openModal, handleCloseModal, message = '', headerText = 'Mensaje de confirmación', onAceptar, disabled = false}: ConfirmDialogProps) => {
    return (
        <Dialog
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            disableEscapeKeyDown={true}
            disableRestoreFocus={true}
            
            
            onBackdropClick={(e) => {
                e.stopPropagation();
                e.persist();
            }}
            

        >
            <DialogTitle>
            {headerText}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {message}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleCloseModal} disabled={disabled}>Cancelar</Button>
            <Button onClick={onAceptar} autoFocus disabled={disabled}>
                Aceptar
            </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmDialog

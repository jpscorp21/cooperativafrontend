import React from 'react'
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DesktopDatePicker from '@material-ui/lab/DesktopDatePicker'; 
import { TextField } from '@material-ui/core';

type CustomDatePickerProps = {
    value: string;
    name?: string;
    onChange: any;
    label?: string;
} 

const CustomDatePicker = ({value, onChange, name = "", label=""}: CustomDatePickerProps) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
                inputFormat="MM/dd/yyyy"
                label={label}
                value={value} 
                onChange={(value) => onChange(value, name)}
                renderInput={(params) => (
                    <TextField
                        size="small"
                        {...params}
                        fullWidth
                        helperText=""
                    />
                )}
                OpenPickerButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </LocalizationProvider>
    )
}

export default CustomDatePicker

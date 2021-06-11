import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DesktopDatePicker from '@material-ui/lab/DesktopDatePicker'; 
import { TextField } from '@material-ui/core';

const DatePickerAdapter = ({input, meta, ...rest}: any) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
                inputFormat="MM/dd/yyyy"
                label={input.label}
                value={input.value} 
                onChange={(value) => input.onChange(value)}
                renderInput={(params) => (
                    <TextField
                        size="small"
                        {...input}
                        {...params}
                        {...rest}                        
                        fullWidth
                        error={meta.error && meta.touched}
                        helperText={meta.error && meta.touched ? meta.error : ''}
                    />
                )}
                OpenPickerButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </LocalizationProvider>
    )
}

export default DatePickerAdapter;
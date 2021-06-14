import { IconButton, OutlinedInput } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import { grey } from '@material-ui/core/colors';
import { useRef, useState } from 'react';


type BusquedaInputProps = {
    onChange(value: string): void;
    placeholder?: string;
    size?: any;
}


const BusquedaInput = ({onChange, placeholder = "", size = "small"}: BusquedaInputProps) => {

    const inputRef = useRef<any>(null);    
    const [value, setValue] = useState('');
    
    return (
        <OutlinedInput 
            sx={{flex: 1, px: 1}} 
            placeholder={placeholder} 
            size={size}
            value={value}
            onChange={(e) => {
                setValue(e.target.value);
                if (onChange) {
                    onChange(e.target.value)
                }
            }}
            inputRef={inputRef}            
            startAdornment={
                <SearchIcon sx={{color: grey[400]}}></SearchIcon>
            }
            endAdornment={
                <IconButton sx={{display: value.trim()?.length ? 'block' : 'none'}} size="small" onClick={() => { 
                    setValue('');                    
                    onChange('');
                    inputRef.current.focus();
                }}>
                    <CloseIcon sx={{color: grey[400]}}></CloseIcon>
                </IconButton>
            }
        /> 
    )
}

export default BusquedaInput

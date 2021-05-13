import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@material-ui/core";

const RadioGroupAdapter = ({input, meta, ...rest}: any) => {    

    const menuItems = rest.options ? rest.options.map((item: any, index: number) => (
        <FormControlLabel 
            value={item[rest.optionvalue]} 
            checked={input.value === item[rest.optionvalue]} 
            control={<Radio />} 
            label={item[rest.optionlabel]} 
        />
    )) : null    
  
    return (
        <FormControl error={meta.error && meta.touched} component="fieldset" fullWidth={rest.fullWidth}>
            <FormLabel component="legend">{rest.label}</FormLabel>
            <RadioGroup row aria-label="gender" onChange={input.onChange} name={input.name}>
                {menuItems}
            </RadioGroup>
        </FormControl>
    )
}

export default RadioGroupAdapter;
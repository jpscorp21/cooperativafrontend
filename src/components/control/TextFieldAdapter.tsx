import { TextField } from "@material-ui/core";

const TextFieldAdapter = ({input, meta, ...rest}: any) => {    
  
    return (
      <TextField
         {...input}
         {...rest}
         size="small"
         onChange={(event: any) => input.onChange(event.target.value)}
         error={meta.error && meta.touched}                 
         helperText={meta.error && meta.touched ? meta.error : '' }       
      />
    )
}

export default TextFieldAdapter;
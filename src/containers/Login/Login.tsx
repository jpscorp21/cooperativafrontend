import { Alert, Button, Container, Grid, makeStyles, Paper, TextField, Typography } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import { AuthAPI } from "../../api/services/AuthAPI";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {

  const history = useHistory();

  const classes = useStyles();
  const usuarioRef = useRef<HTMLInputElement | null>();
  const passwordRef = useRef<HTMLInputElement | null>();


  const [message, setMessage] = useState('');


  useEffect(() => {
    // localStorage.removeItem('estrella');    
  }, [])


  const handleKeyDown = (e: any) => {
    if (e.keyCode === 13){
      passwordRef.current?.focus();
    }
  }

  const handleKeyDownSubmit = (e: any) => {
    if (e.keyCode === 13){
      handleSubmit();
    }
  }

  const handleSubmit = () => {

    if (!usuarioRef.current?.value || !passwordRef.current?.value) {
      return setMessage('Debe completar los campos usuario y contraseña');
    }

    setMessage('');

    const body = {
      usuario: usuarioRef.current.value,
      password: passwordRef.current.value,

    }

    AuthAPI.login(body)
    .then((data) => {
      if (!data) {
        setMessage('Error en las credenciales');
      }

      localStorage.setItem('estrella', JSON.stringify(data));
      history.push('/');
    })
    .catch((e) => {
      console.log(e);
      setMessage('Error en las credenciales');
    })
  }

  
  return (
    <div style={{position: 'fixed', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#007D4C'}}>      
    <Container maxWidth="xs">
      <Paper elevation={10} sx={{p: 2}}>        
        <div style={{textAlign: 'center'}}>
          <img src="/assets/estrellaltda.png" style={{width: '60%'}}></img>
        </div>
        <Typography component="h1" variant="h5">
          Iniciar Sesión
        </Typography>
        {
          message && <Alert severity="error" sx={{mt: 2}}>{message}</Alert>
        }        
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"            
          name="usuario"            
          placeholder="Ingresar usuario"            
          autoFocus  
          onKeyDown={handleKeyDown}          
          inputRef={usuarioRef}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          placeholder="Ingresar contraseña"            
          type="password"                   
          defaultValue=""  
          onKeyDown={handleKeyDownSubmit}          
          autoComplete="new-password" 
          inputRef={passwordRef}
        />          
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{my: 2}}
          onClick={handleSubmit}
          className={classes.submit}
        >
          Ingresar
        </Button>                 
      </Paper> 
      </Container>     
    </div>
  );
  
}
 
export default Login

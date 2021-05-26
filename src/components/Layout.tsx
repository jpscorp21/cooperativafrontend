import AppSidebar from './AppSidebar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Alert, Snackbar } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { alertActions } from '../slices/alert.slice';

const Layout = ({children}: React.PropsWithChildren<{}>) => {

  const dispatch = useDispatch();
  const alert = useSelector((store) => store.alert);
  
  return (
    <>
      <CssBaseline />
      <AppSidebar>
        {children}
      </AppSidebar>  
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={alert.open}                    
        onClose={() => dispatch(alertActions.close())}    
        autoHideDuration={3000}
      >
        <Alert onClose={() => dispatch(alertActions.close())} severity={alert.type as any}>
          {alert.message}
        </Alert>
      </Snackbar>    
    </>
  )
}

export default Layout

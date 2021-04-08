import AppSidebar from './AppSidebar';
import CssBaseline from '@material-ui/core/CssBaseline';

const Layout = ({children}: React.PropsWithChildren<{}>) => {
  return (
    <>
      <CssBaseline />
      <AppSidebar>
        {children}
      </AppSidebar>      
    </>
  )
}

export default Layout

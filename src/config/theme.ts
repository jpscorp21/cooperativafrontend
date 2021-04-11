import { createMuiTheme } from "@material-ui/core/styles";
import { green, deepPurple, teal, cyan, grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  
  palette: {    
    primary: {
      main: cyan[900],    
      "600": green[700]
    },
    secondary: {
      main: cyan[700]
    }
  },
  typography: {
    fontFamily: [
      '"Montserrat"',
      'Roboto',
      'Helveitca Neue'
    ].join(','),
    h5: {
      fontSize: '1.25rem',
      fontWeight: 800
    }
  },
  components: {
    MuiToolbar: {      
      styleOverrides: {
        root: {
          background: 'white',
          boxShadow: 'none !important'
        }
      }
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          background: 'white',
          boxShadow: 'none !important'
        }
      }
    },
    MuiTableRow: {
      styleOverrides: {
        head: {   
             
          backgroundColor: 'white !important',          
        },
        root: {
          backgroundColor: 'white !important',          
          borderBottom: '1px solid #E7E7E7', 
          // hide last border
          '&:last-child td, &:last-child th': {
            border: 0,
          },
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {        
        head: {        
          fontWeight: 'bold',
          background: '#EBEBEB',            
        },
        root: {          
          paddingTop: 12,
          paddingBottom: 12,
          fontSize: '14px'
          
        },
        body: {          
          color: grey[500],
          fontWeight: 'bold'
        }
      }      
    }
  }
});

export default theme;
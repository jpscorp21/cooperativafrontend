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
      '"Nunito"',
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
          color: 'white',
          background: cyan[800],
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
          borderBottom: '1px solid #E7E7E7', 
          // hide last border
          '&:nth-of-type(odd)': {
            backgroundColor: '#F4F8FB',
          },
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
          // background: '#EBEBEB',            
        },
        root: {          
          paddingTop: 6,
          paddingBottom: 6,
          fontSize: '14px'
          
        },
        body: {           
          
        }
      }      
    }
  }
});

export default theme;
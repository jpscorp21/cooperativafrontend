import { createTheme } from "@material-ui/core/styles";
import { green, grey } from "@material-ui/core/colors";
import { esES } from '@material-ui/core/locale';

const theme = createTheme({
  
  palette: {    
    primary: {
      // main: cyan[800],    
      main: '#007D4C',    
      "600": green[700]
    },
    secondary: {
      // main: cyan[700]
      // main: lightBlue[700]
      main: '#066B7D'
    }
  },
  typography: {
    fontFamily: [
      '"Nunito"',
      'Roboto',
      'Helveitca Neue'
    ].join(','),
    h5: {
      fontSize: '24px',
      fontWeight: 700
    },
    body2: {
      color: 'black !important'
    }
  },
  components: {
    MuiToolbar: {      
      styleOverrides: {
        root: {
          color: 'white',          
          boxShadow: 'none !important'
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true
      }
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0
      }, 
      styleOverrides: {
        root: {
          zIndex: 1300
        }
      }     
    },
    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: 'initial'
        }
      }
    },
    MuiTableRow: {
      styleOverrides: {
        head: {
          paddintTop: '8px',
          paddintBottom: '8px',                              
        },
        root: {  
          border: 'none',
          // border: '1px solid red'                  
          // borderBottom: '1px solid red !important',
           
          // hide last border
          // '&:nth-of-type(odd)': {
          //   backgroundColor: '#F4F8FB',
          // },
          // '&:last-child td, &:last-child th': {
          //   border: 0,
          // },
        },
      }
    },    
    MuiTableCell: {
      styleOverrides: {        
        head: { 
          color: grey[900],       
          fontWeight: 'bold',
          borderTop: '1px solid ' + grey[300],          
          // background: '#EBEBEB',            
        },
        root: {          
          paddingTop: 5,
          paddingBottom: 5,
          fontSize: '14px',
          // border: 'none'
        },
        body: {           
          // border: '1px solid red'
        }
      }      
    },
    MuiTablePagination: {
      defaultProps: {
        
        labelRowsPerPage: '',
        
        
      },
      styleOverrides: {

        root: {
          color: 'black',
          
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: 'black'
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          minWidth: '0px !important',
          maxWidth: 'none !important',
          
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          fontSize: '36px !important',

        },
      
      }
    },
    
  }
}, esES);

export default theme;
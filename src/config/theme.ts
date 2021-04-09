import { createMuiTheme } from "@material-ui/core/styles";
import { teal } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[600]
    },
  },
  typography: {
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600
    }
  }
});

export default theme;